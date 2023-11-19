<script lang="ts">
    import { Router, Route } from 'svelte-routing';

    import Home from './pages/Home.svelte';
    import Error404 from './pages/404.svelte';

    import 'bootstrap';

    import './assets/css/icofont/icofont.min.css';
    import './assets/scss/index.scss';
    
    export let url = ``;
</script>

<Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="*"><Error404 /></Route>
</Router>
