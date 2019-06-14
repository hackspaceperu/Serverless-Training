const params = {
    aws: {
        ses: {
            accessKeyId: process.env.AWS_SES_ID,
            secretAccessKey: process.env.AWS_SES_SECRET,
            region: process.env.AWS_SES_REGION
        },
        sns: {
            accessKeyId: process.env.AWS_SNS_ID,
            secretAccessKey: process.env.AWS_SNS_SECRET,
            region: process.env.AWS_SNS_REGION
        },
        sqs: {
            accessKeyId: process.env.AWS_SQS_ID,
            secretAccessKey: process.env.AWS_SQS_SECRET,
            region: process.env.AWS_SQS_REGION
        },
        demon: {
            accessKeyId: process.env.AWS_SQS_ID,
            secretAccessKey: process.env.AWS_SQS_SECRET,
            region: process.env.AWS_SQS_REGION
        }
    },
    mongo: {
        host: {
            hackspce: process.env.DB_HACKSPACE
        }
    }
}

export { params }