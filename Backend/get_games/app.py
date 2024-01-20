import boto3
import os
import json

# Initialize DynamoDB
dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('TABLE_NAME', 'DefaultTableName')
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    """
    Lambda function to retrieve all entries from the DynamoDB table.
    """

    try:
        # Using the scan operation to retrieve all items
        response = table.scan()

        # Extracting items from the response
        items = response.get('Items', [])

        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error retrieving data: {str(e)}')
        }
