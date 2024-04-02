import json
import untangle
from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session

client_id = "trestle_CostaDadswebsite20231010111251"
client_secret = "19827edf721d454d84a79cfbfebd34dc"  # Sensitive data

# Set up the OAuth2 session
c = BackendApplicationClient(client_id=client_id)
session = OAuth2Session(client=c)

# Base URI for the API
base_uri = 'https://api-prod.corelogic.com/trestle/odata'

try:
    # Fetch the token
    token = session.fetch_token(token_url='https://api-prod.corelogic.com/trestle/oidc/connect/token', 
                                client_id=client_id, client_secret=client_secret,
                                scope='api')
    token_json = json.dumps(token, indent=4)
    print("Token fetched successfully:")
    print(token_json)

    # Fetch metadata
    r = session.get(f"{base_uri}/$metadata")
    
    # Check if request was successful
    if r.status_code == 200:
        metadata = untangle.parse(r.text)
        print("Metadata fetched successfully.")
        
        # Example of navigating the parsed XML:
        for schema in metadata['edmx:Edmx']['edmx:DataServices']['Schema']:
            print(f"Schema Namespace: {schema['Namespace']}")
            if schema.get('EntityType'):
                for entity_type in schema['EntityType']:
                    print(f"  Entity Type Name: {entity_type['Name']}")
                    if entity_type.get('Key'):
                        for key in entity_type['Key']['PropertyRef']:
                            print(f"    Key PropertyRef Name: {key['Name']}")
                    if entity_type.get('Property'):
                        for property in entity_type['Property']:
                            print(f"    Property Name: {property['Name']}, Type: {property['Type']}")
            elif schema.get('EnumType'):
                for enum_type in schema['EnumType']:
                    print(f"  Enum Type Name: {enum_type['Name']}")
                    for member in enum_type['Member']:
                        print(f"    Member Name: {member['Name']}, Value: {member['Value']}")
                        if member.get('Annotation'):
                            print(f"      Annotation Term: {member['Annotation']['Term']}, String: {member['Annotation']['String']}")
    else:
        print("Failed to fetch metadata:")
        print(r.text)

except Exception as e:
    print(f"An error occurred: {str(e)}")