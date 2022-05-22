export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'startyear',
            title:'Start Year',
            type:'string'
        },
        {
            name:'endyear',
            title:'End Year',
            type:'string'
        },
        {
            name:'companyname',
            title:'Company Name',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}