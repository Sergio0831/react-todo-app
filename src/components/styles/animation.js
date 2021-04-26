import { keyframes } from "styled-components";

export const fadeInTop = keyframes`
    0% {
		transform: translateX(-50%) translateY(-150%) scale(0.3);
		opacity: 0;
	}

	50% {
		transform: translateX(-49%) translateY(0) scale(1);
		opacity: 1;
	}

	60% {
		transform: translateX(-51%) translateY(0) scale(1);
		opacity: 1;
	}

	70% {
		transform: translateX(-49%) translateY(0) scale(1);
		opacity: 1;
	}

	80% {
		transform: translateX(-51%) translateY(0) scale(1);
		opacity: 1;
	}

	90% {
		transform: translateX(-49%) translateY(0) scale(1);
		opacity: 1;
	}

	100% {
		transform: translateX(-50%) translateY(0) scale(1);
		opacity: 1;
	}
`;

export const fadeOutTop = keyframes`
    0% {
		transform: translateX(-50%) translateY(0) scale(1);
		opacity: 1;
	}

	100% {
		transform: translateX(-50%) translateY(-150%) scale(0.3);
		opacity: 0;
	}
`;

export const moveInRight = keyframes`
    0% {
		transform: translateX(-20%);
		opacity: 0;
	}

	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

export const moveOutRight = keyframes`
    0% {
		transform: translateX(0);
		opacity: 1;
	}

	100% {
		transform: translateX(-20%);
		opacity: 0;
	}
`;
