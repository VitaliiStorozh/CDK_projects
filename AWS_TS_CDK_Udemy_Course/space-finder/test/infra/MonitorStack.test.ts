import { App } from 'aws-cdk-lib';
import { MonitorStack } from '../../src/infra/stacks/MonitorStack';
import { Template } from 'aws-cdk-lib/assertions';

describe('Initial test suit', () => {
  let monitorStackTemplate: Template;

  beforeAll(() => {
    const testApp = new App({
      outdir: 'cdk.out',
    });
    const monitorStack = new MonitorStack(testApp, 'MonitorStack');
    monitorStackTemplate = Template.fromStack(monitorStack);
  });

  test('Lambda properties', () => {
    monitorStackTemplate.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Runtime: 'nodejs18.x',
    });
  });
  test('SNS Topic properties', () => {
    monitorStackTemplate.hasResourceProperties('AWS::SNS::Topic', {
      DisplayName: 'AlarmTopic',
      TopicName: 'AlarmTopic',
    });
  });
});
