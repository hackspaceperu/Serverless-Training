import aws from 'aws-sdk'

aws.config.update({
    accessKeyId,
    region,
    secretAccessKey
})

const ses = new aws.SES()
const sns = new aws.SNS()
const s3 = new aws.S3()

const {ses, sns, s3}