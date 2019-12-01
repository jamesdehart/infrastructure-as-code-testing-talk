import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

export class DemoCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new s3.Bucket(this, 'reInventDemoBucket', {
      versioned: true,
    });
  }
}

const app = new cdk.App();
new DemoCdkStack(app, "DemoCdkStack");
