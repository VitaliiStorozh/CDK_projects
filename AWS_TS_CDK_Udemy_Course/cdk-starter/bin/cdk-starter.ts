#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PhotosStack } from '../lib/PhotosStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';
import { BucketTugger } from './tagger';
import { HIPAASecurityChecks } from 'cdk-nag';

const app = new cdk.App();
const photoStack = new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: photoStack.photosBucketArn,
});

const tagger = new BucketTugger('environment', 'dev');
cdk.Aspects.of(app).add(tagger);
cdk.Aspects.of(app).add(new HIPAASecurityChecks());
