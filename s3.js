var req = [
    {
        'question': 'Which service will you use to analyze data in S3 using standard SQL '
        , 'optiona': ' Lambda ',
        'optionb': ' Athena ',
        'optionc': ' Step Function ',
        'optiond': ' None ',
        'answer': 'b',
        'info': ' Athena is a serverless interactive query service , can run SQL queries directly over your S3 Analytics reports '

    }, {
        'question': ' Which is the correct statment  ',
        'optiona': 'The Amazon S3 notification feature enables you to receive notifications when certain events happen in your bucket',
        'optionb': 'Permission can be provided to other AWS accounts to view an object in S3 bucket',
        'optionc': ' For cross Region Replication versioning should be on , versioning cannot be turned off later',
        'optiond': 'All',
        'answer': 'd',
        'info': 'All'
    },
    {
        'question': 'Which service stores data as files and file hierarchy',
        'optiona': 'S3',
        'optionb': 'EBS',
        'optionc': 'EFS  ',
        'optiond': 'None',
        'answer': 'c',
        'info': ' '
    },

    {
        'question': 'Which service stores data as blocks within sectors and tracs',
        'optiona': 'S3',
        'optionb': 'EBS',
        'optionc': 'EFS  ',
        'optiond': 'None',
        'answer': 'b',
        'info': ' '
    },

    {
        'question': 'Which service stores data as objects',
        'optiona': 'S3',
        'optionb': 'EBS',
        'optionc': 'EFS  ',
        'optiond': 'None',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': 'Which service is is the largest and most performant object storage service for structured and unstructured data and the storage service of choice to build a data lake',
        'optiona': 'S3',
        'optionb': 'EBS',
        'optionc': 'EFS  ',
        'optiond': 'None',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': 'Objects consists of ',
        'optiona': 'Key',
        'optionb': 'Value',
        'optionc': 'Version id and metadata ',
        'optiond': 'All',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' S3 bucket names should be unique  ',
        'optiona': 'within an Availability Zone',
        'optionb': 'within a Region',
        'optionc': 'within an AWS Account ',
        'optiond': 'globally , within all AWS account',
        'answer': 'd',
        'info': ''
    }
    ,
    {
        'question': ' What is min and max size of object in S3 ',
        'optiona': ' 0 Bytes to 1 Tera bytes',
        'optionb': '  1 Bytes to 1 Tera bytes',
        'optionc': ' 0 Bytes to 5 Tera Bytes',
        'optiond': ' 1 Bytes to 5 Tera Bytes',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' Which of the following tiering used ML to determine appropriate storage class ',
        'optiona': ' Standard Default',
        'optionb': ' Standard Infrequent',
        'optionc': ' Intelligent Tiering ',
        'optiond': ' One Zone infrequent access',
        'answer': 'c',
        'info': ' '
    },
    {
        'question': ' How much time it takes to retreive data from Glacier  ',
        'optiona': ' 12 hours ',
        'optionb': ' between minutes to hours ',
        'optionc': ' milliseconds',
        'optiond': ' None',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' How much time it takes to retreive data from Glacier Deep Archive ',
        'optiona': ' 12 hours ',
        'optionb': ' between minutes to hours ',
        'optionc': ' milliseconds',
        'optiond': ' None',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' How much time it takes to retreive data from S3 standard  ',
        'optiona': ' 12 hours ',
        'optionb': ' between minutes to hours ',
        'optionc': ' milliseconds',
        'optiond': ' None',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' ACL is attached to  ',
        'optiona': 'bucket only',
        'optionb': ' object',
        'optionc': 'Aws account',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': ' Policy is attached to  ',
        'optiona': 'bucket only',
        'optionb': ' object',
        'optionc': 'Aws account',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': ' '
    }  ,
    {
        'question': ' What is the consistency for Update / Deleted object ',
        'optiona': ' eventually consistency',
        'optionb': ' read write consistency',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': ' '
    }  ,
    {
        'question': 'Which service simplifies, automates, and accelerates moving and replicating data between on-premises storage and AWS services over the network ',
        'optiona': ' Aws Datasync ',
        'optionb': ' AWS Data backup',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': ' '
    }  ,
    {
        'question': 'Which service is used for offline data transfer',
        'optiona': ' Aws Snowball ',
        'optionb': ' AWS Snow mobile',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': 'If data is updated in S3 , what action should be performed in Cloud Front',
        'optiona': ' Update ',
        'optionb': ' Invalidate',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': ' Which one determine when the cache expire',
        'optiona': ' Origin ',
        'optionb': ' TTL',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'How cloudfront access private s3 buckets  ',
        'optiona': ' Signed Url ',
        'optionb': ' Signed Cookies',
        'optionc': ' It cannot access ',
        'optiond': ' Origin Identity Access OIA',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'allow you to control who can access your content when you don\'t want to change your current URLs or when you want to provide access to multiple restricted files, for example, all of the files in the subscribers\' area of a website ',
        'optiona': ' Signed Url ',
        'optionb': ' Signed Cookies',
        'optionc': ' It cannot access ',
        'optiond': ' Origin Identity Access OIA',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html"> Read More </a> '
    } ,
    {
        'question': 'includes additional information, for example, an expiration date and time, that gives you more control over access to your content',
        'optiona': ' Signed Url ',
        'optionb': ' Signed Cookies',
        'optionc': ' It cannot access ',
        'optiond': ' Origin Identity Access OIA',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html"> Read More </a> '
    } ,
    {
        'question': 'How cloudfront access is protected ',
        'optiona': ' Signed Url ',
        'optionb': ' Signed Cookies',
        'optionc': ' both ',
        'optiond': ' None',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': 'How to give access to encrypted files  ',
        'optiona': ' presign ',
        'optionb': ' cognito ',
        'optionc': ' both ',
        'optiond': ' None',
        'answer': 'a',
        'info': ' '
    } ,{
          'question': 'CloudFront  _______ allow you to control who can access your content when you don\'t want to change your current URLs or when you want to provide access to multiple restricted files, for example, all of the files in the subscribers\' area of a website.',
          'optiona': '  Signed Url ',
          'optionb': '   signed cookies ',
          'optionc': '  Both  ',
          'optiond': ' None ',
          'answer': 'b',
          'info': ' <a href="https://aws.amazon.com/blogs/developer/serving-private-content-through-amazon-cloudfront-using-signed-cookies/#:~:text=Canned%20policies%20allow%20you%20to,the%20use%20of%20the%20Amazon.">Know more</a> '
      },{
            'question': 'You can specify the date and time that users can no longer access your content.',
            'optiona': '  Canned Policy ',
            'optionb': '   Custom  Policy ',
            'optionc': '  Both  ',
            'optiond': ' None ',
            'answer': 'c',
            'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html">Know more</a> '
        },{
              'question': 'You can specify the IP address or range of IP addresses of the users who can access your content.',
              'optiona': '  Canned Policy ',
              'optionb': '   Custom  Policy ',
              'optionc': '  Both  ',
              'optiond': ' None ',
              'answer': 'b',
              'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html">Know more</a> '
          },{
                'question': 'You can reuse the policy statement for multiple files.',
                'optiona': '  Canned Policy ',
                'optionb': '   Custom  Policy ',
                'optionc': '  Both  ',
                'optiond': ' None ',
                'answer': 'b',
                'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html">Know more</a> '
            },{
                'question': 'You can specify the date and time that users can begin to access your content.',
                'optiona': '  Canned Policy ',
                'optionb': '   Custom  Policy ',
                'optionc': '  Both  ',
                'optiond': ' None ',
                'answer': 'b',
                'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html">Know more</a> '
            },
    {
        'question': 'Which service lets you use your own domain name (for example, www.example.com) in your files URLs instead of using the domain name that CloudFront assigns to your distribution  ',
        'optiona': ' WebSocket  ',
        'optionb': ' CNAMEs ',
        'optionc': ' both ',
        'optiond': ' None',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'To create signed URLs or signed cookies, you need at least one AWS account that has an active ____',
        'optiona': ' cache behavior  ',
        'optionb': ' CloudFront key pair ',
        'optionc': ' Both ',
        'optiond': ' None',
        'answer': 'c',
        'info': 'This account is known as a trusted signer.<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html">Know more </a> '
    }  ,{
    'question': 'To use the Amazon S3 client-side encryption feature to encrypt data before uploading to Amazon S3, you must provide which of the following  master key to the Amazon S3 encryption client  ',
    'optiona': '  client-side master key ',
    'optionb': ' AWS KMS–managed master keys ',
    'optionc': '  All of the Above ',
    'optiond': 'None of the Above',
    'answer': 'c',
    'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/aws_sdk_cryptography.html"> Read More </a>'
    },
    {
        'question': 'Maximum number of public keys in 1 AWS account ',
        'optiona': ' 3  ',
        'optionb': ' 5 ',
        'optionc': ' 10 ',
        'optiond': ' 15',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': ' You set the redirect by adding the which property to the object metadata ',
        'optiona': ' x-amz-website-redirect-location  ',
        'optionb': ' amz-website-redirect-location ',
        'optionc': ' both ',
        'optiond': ' None',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' After you configure a bucket to be a Requester Pays bucket, requesters must include ____________ in their requests either in the header, for POST, GET and HEAD requests, or as a parameter in a REST request to show that they understand that they will be charged for the request and the data download ',
        'optiona': ' x-amz-request-payer ',
        'optionb': ' amz-request-payer ',
        'optionc': ' both ',
        'optiond': ' None',
        'answer': 'a',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html"> Read More </a>'
    },
    {
        'question': ' Requester Pays buckets  supports which of the following ',
        'optiona': 'Anonymous requests ',
        'optionb': ' BitTorrent ',
        'optionc': ' SOAP requests ',
        'optiond': ' None',
        'answer': 'd',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html"> Read More </a>'
    },
    {
        'question': ' After you Enable Transfer Acceleration on a bucket , you  Transfer data to and from the acceleration-enabled bucket by using which one of the following s3-accelerate endpoint domain names',
        'optiona': 'bucketname.s3-accelerate.amazonaws.com ',
        'optionb': ' bucketname.s3-accelerate.dualstack.amazonaws.com ',
        'optionc': ' Both ',
        'optiond': ' None',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html"> Read More </a>'
    },
    {
        'question': ' which of the following  will direct all Amazon S3 requests made by s3 and s3api AWS CLI commands to the accelerate endpoint: s3-accelerate.amazonaws.com',
        'optiona': ' aws configure set default.s3.use_accelerate_endpoint true ',
        'optionb': ' setting the --endpoint-url parameter to https://s3-accelerate.amazonaws.com ',
        'optionc': ' Both ',
        'optiond': ' None',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration-examples.html"> Read More </a>'
    },
    {
        'question': ' By default, you can create up to _________access points per Region for each of your AWS accounts. ',
        'optiona': ' 10 ',
        'optionb': ' 100 ',
        'optionc': ' 1,000  ',
        'optiond': ' None',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html"> Read More </a>'
    },
    {
        'question': ' What is the command to create an access point  ',
        'optiona': ' aws s3 create-access-point --name example-ap --account-id 123456789012 --bucket example-bucket ',
        'optionb': ' aws s3control create-access-point --name example-ap --account-id 123456789012 --bucket example-bucket ',
        'optionc': ' Both  ',
        'optiond': ' None',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html"> Read More </a>'
    },
    {
        'question': ' Which of the following  condition keys that can be used in IAM policies to control access to your resources ',
        'optiona': ' s3:DataAccessPointArn ',
        'optionb': ' s3:DataAccessPointAccount ',
        'optionc': ' s3:AccessPointNetworkOrigin  ',
        'optiond': ' All of the Above',
        'answer': 'd',
        'info': ` <p style='white-space: pre-wrap;' > "Condition" : {
    "StringLike": {
        "s3:DataAccessPointArn": "arn:aws:s3:us-west-2:123456789012:accesspoint/*"
    }
}</p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html"> Read More </a>`
    },
    {
        'question': ' Which is  is a type of error response that signals to the requester that they should resend the request to a different endpoint. ',
        'optiona': ' Permanent request redirection ',
        'optionb': ' Temporary request redirection ',
        'optionc': ' Both  ',
        'optiond': ' None',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Redirects.html"> Read More </a>'
    },
    {
        'question': ' Which is  is a type of error response that indicates  your request addressed a resource inappropriately ',
        'optiona': ' Permanent request redirection ',
        'optionb': ' Temporary request redirection 302 /307',
        'optionc': ' Both  ',
        'optiond': ' None',
        'answer': 'a',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Redirects.html"> Read More </a>'
    }
];

var title = "Simple Storage Service"
