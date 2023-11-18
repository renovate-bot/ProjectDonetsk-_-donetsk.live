<script>
    import Discord from '../assets/img/socials/discord.svg';
    import GitHub from '../assets/img/socials/github.svg';

    import Logo from '../assets/img/logos/logo.jpg';

    import '../assets/scss/pages/home.scss';
</script>

<main class="png-home">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay muted loop>
        <source src="/assets/video/background.mp4" type="video/mp4">
    </video>
    <div class="vignette"></div>
    <div class="splash-container tw-mt-20 tw-w-1/3 tw-min-w-[250px] tw-text-[#ffffff]">
        <img src={Logo} alt="Donetsk logo" class="splash-logo tw-rounded-full tw-mb-5">

        <h1 class="tw-font-extrabold tw-mb-2">Project Donetsk</h1>
        <p class="tw-text-[#aaaaaa]">Call of Duty, reimagined.</p>
        <br>
        <div class="splash-buttons tw-flex tw-flex-col tw-w-[250px] tw-mx-auto tw-min-w-min">
            <a href="https://paypal.me/wegj1" target="_blank" rel="noreferrer noopoener" class="btn btn-lg btn-darken btn-orange tw-mb-3">
                <i class="icofont icofont-money-bag"></i>
                Donate
            </a>
            <a href="https://support.donetsk.live" target="_blank" rel="noreferrer noopoener" class="btn btn-lg btn-danger tw-mb-3">
                <i class="icofont icofont-ui-chat"></i>
                Forum
            </a>
            <a href="https://github.com/ProjectDonetsk/Donetsk" target="_blank" rel="noreferrer noopoener" class="btn btn-lg btn-dark tw-mb-3">
                <img src={GitHub} alt="GitHub icon" class="icon">
                GitHub
            </a>
            <a href="https://discord.donetsk.live" target="_blank" rel="noreferrer noopoener" class="btn btn-lg btn-darken btn-discord">
                <img src={Discord} alt="Discord icon" class="icon">
                Discord
            </a>
        </div>
        <br>
        <p class="splash-footer tw-mt-2 tw-text-[#aaaaaa]">Coming Soon!</p>
    </div>
</main>
