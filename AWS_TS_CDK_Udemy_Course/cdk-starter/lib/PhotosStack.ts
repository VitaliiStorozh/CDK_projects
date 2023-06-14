import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: 'photos-bucket-1234567890',
    });
  }
}
