let streamingServices = [
    {
        serviceType: 'video',
        serviceName: 'Amazon Prime Video',
        serviceFullPrice: 14.90,
        maxSimultScreens: 3,
    },
    {
        serviceType: 'video',
        serviceName: 'Apple TV Plus',
        serviceFullPrice: 14.90,
        maxSimultScreens: 3,
    },
    {
        serviceType: 'video',
        serviceName: 'HBO Max',
        serviceFullPrice: 27.90,
        maxSimultScreens: 3,
    },
    {
        serviceType: 'video',
        serviceName: 'Netflix',
        servicePlan: {
            planName: 'Full HD',
            planFullPrice: 29.90,
            planMaxSimultScreens: 1,
        },
    },
]

let firstStreamingService = streamingServices[0];

console.log(firstStreamingService.serviceType);