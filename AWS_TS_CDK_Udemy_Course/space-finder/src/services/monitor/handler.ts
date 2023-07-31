import { SNSEvent } from 'aws-lambda';

const webHookUrl =
  'https://hooks.slack.com/services/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';

async function handler(event: SNSEvent, context) {
  for (const record of event.Records) {
    await fetch(webHookUrl, {
      method: 'POST',
      body: JSON.stringify({
        text: `Huston we have a problem: ${record.Sns.Message}`,
      }),
    });
  }
}

export { handler };
