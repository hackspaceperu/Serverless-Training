import aws from 'aws-sdk'
import { params } from './params'

aws.config.update(params.aws.sns)

const ses = new aws.SES()
const sns = new aws.SNS()
const s3 = new aws.S3()

export {ses, sns, s3 }