<script>
    import Saos from 'saos';

    import Discord from '../assets/img/socials/discord.svg';
    import GitHub from '../assets/img/socials/github.svg';

    import Logo from '../assets/img/logos/logo.jpg';

    const texts = [
        `Modern Warfare`,
        `Black Ops Cold War`,
        `Warzone`
    ];
    
    let textIndex = 0;
    setInterval(() => {
        textIndex++;
        if (textIndex > texts.length - 1) textIndex = 0;
    }, 2e3);
</script>

<main>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay muted loop>
        <source src="/assets/video/background.mp4" type="video/mp4">
    </video>
    <div class="vignette"></div>
    <div class="splash-container tw-mt-20 tw-w-1/3 tw-min-w-[250px] tw-text-[#ffffff]">
        <Saos animation="slide-in-blurred-top 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000) both">
            <img src={Logo} alt="Donetsk logo" class="splash-logo tw-rounded-full tw-mb-5">
        </Saos>

        <Saos animation="slide-in-blurred-top 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both">
            <h1 class="tw-font-extrabold tw-mb-2">Project Donetsk</h1>
        </Saos>

        <Saos animation="slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both">
            {#key textIndex}
                <p class="splash-subtext tw-text-[#aaaaaa]">
                    <span>{texts[textIndex]}</span>
                </p>
            {/key}
        </Saos>
        <br>

        <Saos animation="slide-in-blurred-top 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both">
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
        </Saos>
        <br>
        <Saos animation="slide-in-blurred-top 0.4s cubic-bezier(0.230, 1.000, 0.320, 1.000) both">
            <p class="splash-footer tw-text-[#aaaaaa]">Coming Soon!</p>
        </Saos>
    </div>
</main>

<style lang="scss">
    @keyframes -global-slide-in-blurred-top {
        0% {
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform-origin: 50% 0%;
            filter: blur(15px);
            opacity: 0;
        }

        100% {
            transform: translateY(0) scaleY(1) scaleX(1);
            transform-origin: 50% 50%;
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes -global-slide-in-fwd-center-blurred {
        0% {
            transform: translateZ(-1400px);
            filter: blur(15px);
            opacity: 0;
        }
        100% {
            transform: translateZ(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    .splash-container {
        & > img, br {
            user-select: none;
        }
    
        margin-left: auto;
        margin-right: auto;
    
        text-align: center;
        width: 50%;
    
        .icon {
            vertical-align: middle;
            padding: 0px 0px 3.5px 0px;
    
            height: 24px;
            width: 24px;
        }
        span {
            font-weight: bold;
            font-size: 1.25rem;
            animation: slide-in-fwd-center-blurred 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
        }

        .splash-footer {
            font-size: 0.75rem;
        }
    }

    video, .vignette {
        position: fixed;
        z-index: -1;
    
        width: 100vw;
        height: 100vh;
    
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    
    video {
        object-fit: cover;
    }
    
    .vignette {
        background: #00000080;
    }
</style>
