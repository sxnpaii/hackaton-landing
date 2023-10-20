export const posStatus = (status) => {
    switch (status) {
        case "right":
            return "fade-up-left";
        case "left":
            return "fade-up-right";
        case "up":
            return "fade-up";

        default:
            return "null";
    }
};