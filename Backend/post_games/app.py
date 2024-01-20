
import boto3
import os
import json

# Initialize DynamoDB
dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('TABLE_NAME', 'DefaultTableName')
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    """
    Lambda function to handle requests from both the AWS Lambda UI and Postman.
    """

    # Check if the event comes from API Gateway
    if 'body' in event:
        # Assuming the body is in JSON format
        try:
            data = json.loads(event['body'])
        except json.JSONDecodeError:
            # Handle JSON decoding error
            return {
                'statusCode': 400,
                'body': json.dumps('Invalid JSON format')
            }
    else:
        # Direct invocation (e.g., AWS Lambda test event)
        data = event

    # Validate data
    if not isinstance(data, dict) or 'gameId' not in data:
        return {
            'statusCode': 400,
            'body': json.dumps('Invalid data format or missing required fields')
        }

    # Write data to DynamoDB
    try:
        response = table.put_item(Item=data)
        return {
            'statusCode': 200,
            'body': json.dumps('Data written successfully.')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error writing data: {str(e)}')
        }



# {
#     "gameId": "7777",
#     "name": "Innovation Challenge",
#     "when": "Now"
# }
