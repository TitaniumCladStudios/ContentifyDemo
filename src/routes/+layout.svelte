<slot></slot>

<style>
    :global(body){
        background-image: linear-gradient(
        130deg,
        hsl(175deg 100% 40%) 0%,
        hsl(179deg 100% 40%) 11%,
        hsl(183deg 100% 41%) 22%,
        hsl(187deg 100% 43%) 33%,
        hsl(191deg 100% 45%) 44%,
        hsl(194deg 100% 47%) 56%,
        hsl(197deg 100% 49%) 67%,
        hsl(199deg 100% 50%) 78%,
        hsl(201deg 100% 50%) 89%,
        hsl(203deg 100% 50%) 100%
        );
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Barlow', sans-serif;
    }
    :global(h1) {
        font-weight: bold;
    }
</style>