module.exports = {
    lang: 'en-US',
    title: 'Horizon Worlds Code Reference',
    description: 'Horizon Worlds Code Reference',
    themeConfig: {
        navbar: [                    
            {
                text: 'Events',
                activeMatch: '/code/events/', 
                children: [
                    {
                      text: 'Control',
                      link: '/code/events/control',                                             
                    },
                    {
                      text: 'Events',
                      link: '/code/events/events',    
                    },
                    {
                        text: 'Events Actions',
                        link: '/code/events/eventActions',    
                      }
                  ]                                                   
            },
            {
                text: 'Actions',
                activeMatch: '/code/actions/', 
                children: [
                    {
                      text: 'Events',
                      link: '/code/actions/',                                             
                    },
                  ]                                                   
            },
            {
                text: 'Motion',
                activeMatch: '/code/motion/', 
                children: [
                    {
                      text: 'Events',
                      link: '/code/motion/',                                             
                    },
                  ]                                                   
            },
            {
                text: 'Operators',
                activeMatch: '/code/operators/', 
                children: [
                    {
                      text: 'Events',
                      link: '/code/operators/',                                             
                    },
                  ]                                                   
            },
            {
                text: 'Values',
                activeMatch: '/code/values/', 
                children: [
                    {
                      text: 'Events',
                      link: '/code/values/',                                             
                    },
                  ]                                                   
            },
            {
                text: 'Variables',
                activeMatch: '/code/variables/', 
                children: [
                    {
                      text: 'Events',
                      link: '/code/variables/',                                             
                    },
                  ]                                                   
            },            
        ]
    }    
}