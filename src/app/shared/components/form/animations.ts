import { AnimationTriggerMetadata, trigger, state, transition, animate, style } from '@angular/animations';

export const animations: Array<AnimationTriggerMetadata> = [
    trigger("flyInOut", [
        state("in", style({ transform: "translateX(0)" })),
        transition("void => *", [
            style({ transform: "translateX(100%)" }),
            animate(100),
        ]),
        state("out", style({ transform: "translateX(100%)" })),
        transition("* => void", [
            animate(100, style({ transform: "translateX(100%)" })),
        ]),
    ]),
];
