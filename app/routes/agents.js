import Route from '@ember/routing/route';

export default class AgentsRoute extends Route {

    model() {
        return [
            {
                agentname: 'Nick',
                branch: 'Hummingbird Way'
            },
            {
                agentname: 'Sravs',
                branch: 'Jefferson Ave'
            },
            {
                agentname: 'Astro',
                branch: 'Clifton'
            },
            {
                agentname: 'Sushma',
                branch: 'Falcon Way'
            },
            {
                agentname: 'Cherry',
                branch: 'Cherry Street'
            },
            {
                agentname: 'Shri',
                branch: 'Ekstram Street'
            },
        ]
    }
}
