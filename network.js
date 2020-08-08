var req = [
    {
        'question': 'Which is the correct statment '
        , 'optiona': 'REST and WebSocket API can be created using API Geteway',
        'optionb': 'You pay only for API calls and not for amount of data tranferred ',
        'optionc': 'API gateway does not have authorization and access control',
        'optiond': 'API geteway cannot act as a front end for EC2',
        'answer': 'a',
        'info': '   '

    }, {
        'question': ' Which is the correct statment  ',
        'optiona': 'Web Socket API is used for real time communication',
        'optionb': 'Lambda function cannot be called using api gateway , AWS SDK ',
        'optionc': 'API gateway cannot be multi regional',
        'optiond': 'Data transfer rate is same in all regions ',
        'answer': 'a',
        'info': 'Two way communication'
    },{
        'question': '______ enable you to create private integrations that connect your HTTP API routes to private resources in a VPC, such as Application Load Balancers or Amazon ECS container-based application  ',
        'optiona': 'Lambda integration ',
        'optionb': 'Http integration ',
        'optionc': 'VPC Link',
        'optiond': 'None ',
        'answer': 'c',
        'info': '<a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html">Know more </a>'
    },
    {
        'question': 'What happens If the caller submits 10,000 requests in the first millisecond,',
        'optiona': 'API Gateway processes all 10,000 requests',
        'optionb': 'Gateway serves 5,000 of those requests and processes the rest in the one-second period.',
        'optionc': 'Gateway serves 5,000 of those requests and throttles the rest in the one-second period.   ',
        'optiond': 'throttles all in the one-second period',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-protect.html"> Read More </a>'
    },
    {
        'question': ' Which metric is The time between when API Gateway relays a request to the backend and when it receives a response from the backend.',
        'optiona': 'Latency',
        'optionb': 'IntegrationLatency	',
        'optionc': 'DataProcessed  ',
        'optiond': 'Count',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-metrics.html"> Read More </a>'
    },
    {
        'question': ' Which metric is The time between when API Gateway receives a request from a client and when it returns a response to the client. The latency includes the integration latency and other API Gateway overhead',
        'optiona': 'Latency',
        'optionb': 'IntegrationLatency	',
        'optionc': 'DataProcessed  ',
        'optiond': 'Count',
        'answer': 'a',
        'info': ' <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-metrics.html"> Read More </a>'
    },
    {
        'question': 'What are the integration types supported in API gateway',
        'optiona': 'Lambda , HTTP and Mock',
        'optionb': 'VPC Link ',
        'optionc': 'AWS Service   ',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': 'All'
    },
    {
        'question': 'When request submissions exceed the steady-state request rate and burst limits, API Gateway fails the limit-exceeding requests and returns',
        'optiona': '428',
        'optionb': '429 ',
        'optionc': '430   ',
        'optiond': '431',
        'answer': 'b',
        'info': 'Too Many Requests'
    },
    {
        'question': 'How to pass query parameters  to Lambda from API gateway',
        'optiona': 'Method Request ',
        'optionb': 'Integration Request Mapping Template',
        'optionc': 'Both',
        'optiond': 'None',
        'answer': 'b',
        'info': ' Integration Request'
    },
    {
        'question': 'Enable CORS will do the following  ',
        'optiona': 'Create OPTIONS method ',
        'optionb': 'Add 200 Method Response with empty response model to OPTIONS method',
        'optionc': 'Add Mockk Integration to OPTIONS method',
        'optiond': 'All',
        'answer': 'd',
        'info': 'All'
    }
    ,
    {
        'question': ' Choose the correct statement ',
        'optiona': ' By default Enable API cache is checked ',
        'optionb': ' By default enable throttling is checked with rate 1000 and burst 5000  ',
        'optionc': 'The API Gateway is responsible for request routing, composition, and protocol translation',
        'optiond': 'b and c',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' What is a stage ',
        'optiona': ' define the path through which the deployment is accessible',
        'optionb': ' a JSON policy document that you attach to an API to control whether a specified principal (typically an IAM user or role) can invoke the API',
        'optionc': ' ensures that API traffic is controlled to help your backend services maintain performance and availability',
        'optiond': 'None',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': 'Choose the correct statement   ',
        'optiona': ' a VPC can have subnets in multiple Availability zones ',
        'optionb': 'An internet gateway enables communication over the internet, and a virtual private network (VPN) connection enables communication with your corporate network.',
        'optionc': ' IPv6 traffic over a Site-to-Site VPN connection is supported',
        'optiond': ' a and b',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' If a subnet s traffic is routed to an internet gateway, the subnet is known as a  ',
        'optiona': 'private subnet',
        'optionb': 'public subnet ',
        'optionc': 'VPN-only subnet',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' If a subnet doesnt have a route to the internet gateway, the subnet is known  ',
        'optiona': 'private subnet',
        'optionb': 'public subnet ',
        'optionc': 'VPN-only subnet',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' If a subnet doesnt have a route to the internet gateway, but has its traffic routed to a virtual private gateway for a Site-to-Site VPN connection, the subnet is known as  ',
        'optiona': 'private subnet',
        'optionb': 'public subnet ',
        'optionc': 'VPN-only subnet',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': ' Calculate ips for CIDR  10.0.0.0/30  ',
        'optiona': ' 2 ^(32-30)',
        'optionb': ' 30 ',
        'optionc': ' 2^30',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' In the public subnets, __________ to allow outbound Internet access for resources in the private subnets.  ',
        'optiona': ' Internet Gateway',
        'optionb': ' AWS Transit Gateway ',
        'optionc': ' API Gateway ',
        'optiond': 'managed NAT gateways',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': 'Which service easily scale connectivity across thousands of Amazon VPCs, AWS accounts, and on-premises networks ',
        'optiona': ' Internet Gateway ',
        'optionb': ' AWS Transit Gateway ',
        'optionc': ' API Gateway ',
        'optiond': 'managed NAT gateways',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': 'What is 504 error ?',
        'optiona': ' Timeout ',
        'optionb': ' When classic Load Balance does not find the requested resource ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': 'Which one is available for classic load balancer',
        'optiona': ' Listener ',
        'optionb': ' Target Groups ',
        'optionc': ' Rule ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': 'Which one is available for netwok load balancer',
        'optiona': ' Listener ',
        'optionb': ' Target Groups ',
        'optionc': ' Rule ',
        'optiond': ' a and b ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': 'Which one evaluates traffic that matches port ',
        'optiona': ' Listener ',
        'optionb': ' Target Groups ',
        'optionc': ' Rule ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' EC2 instances can be directly attached to which Load Balancer',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' WAF attached to which Load Balancer',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Sticky session can be enabled in ',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' a and b ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' Which of the following operates at Application Layer',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Which of the following operates at Transport Layer',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' How to find IP of EC2 which is called via Load Balancer',
        'optiona': ' Sticky sessions ',
        'optionb': ' X-Forwarded-For  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Which allow to remember the user session via cookie ',
        'optiona': ' Sticky sessions ',
        'optionb': ' X-Forwarded-For  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' Cross Zone Load Balancer is available in ',
        'optiona': ' Classic ',
        'optionb': ' Application  ',
        'optionc': ' Network ',
        'optiond': ' a and c ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' Request routing can be done based on  ',
        'optiona': ' Sub domain ',
        'optionb': ' URL path  ',
        'optionc': ' Query Params and Request types ',
        'optiond': ' All ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' Classic load balancer can be associated with   ',
        'optiona': ' Ec2 Instances ',
        'optionb': ' Auto Scaling group  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' Classic load balancer can be associated with   ',
        'optiona': ' Ec2 Instances ',
        'optionb': ' Auto Scaling group  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' By default, all _________ traffic from the security group is permitted   ',
        'optiona': ' ingress  ',
        'optionb': ' egress  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': '__________ enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.   ',
        'optiona': ' Vpc peering  ',
        'optionb': ' VPC endpoint   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html"> Read more </a>  '
    },
    {
        'question': '__________ enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.   ',
        'optiona': ' Vpc peering  ',
        'optionb': ' VPC endpoint   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html"> Read more </a>  '
    },
    {
        'question': '__________  is a container that holds information about how you want to route traffic on the internet for a specific domain, such as example.com, and its subdomains (acme.example.com, zenith.example.com). ',
        'optiona': ' hosted zone ',
        'optionb': '  traffic policy   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html"> Read more </a>  '
    },
    {
        'question': 'routing lets you route traffic to a resource when the resource is healthy or to a different resource when the first resource is unhealthy',
        'optiona': ' Geolocation routing ',
        'optionb': '  Failover routing   ',
        'optionc': ' Geoproximity routing ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"> Read more </a>  '
    },
    {
        'question': 'Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another',
        'optiona': ' Geolocation routing ',
        'optionb': '  Failover routing   ',
        'optionc': ' Geoproximity routing ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"> Read more </a>  '
    },
    {
        'question': ' Use when you want to route internet traffic to your resources based on the location of your users.',
        'optiona': ' Geolocation routing ',
        'optionb': '  Failover routing   ',
        'optionc': ' Geoproximity routing ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"> Read more </a>  '
    },
    {
        'question': ' ________let you route traffic to selected AWS resources, such as CloudFront distributions , Amazon S3 buckets or Another record in the same Route 53 hosted zone ',
        'optiona': '  CNAME record ',
        'optionb': '   alias records   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html"> Read more </a>  '
    },
    {
        'question': ' ________record can redirect DNS queries to any DNS record ',
        'optiona': '  CNAME record ',
        'optionb': '   alias records   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html"> Read more </a>  '
    },
    {
        'question': ' ________record can redirect DNS queries to any DNS record ',
        'optiona': '  CNAME record ',
        'optionb': '   alias records   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html"> Read more </a>  '
    },
    {
        'question': ' _______ specifies who can access one or more deployed API stages and methods—and also how much and how fast they can access them ',
        'optiona': '  A usage plan ',
        'optionb': '   Resource Policy   ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"> Read more </a>  '
    },
    {
        'question': ' The plan uses  to identify API clients and meters access to the associated API stages for each key ',
        'optiona': ' Lambda Authorizer ',
        'optionb': ' Cognito Authorizer ',
        'optionc': ' API keys ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '<a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"> Read more </a>  '
    }
];

var title = "API Gateway"
