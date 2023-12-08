export default {
    root: ({ props, context }) => ({
        class: [
            // Font
            "font-sans leading-none",

            // Spacing
            "m-0",
            {
                "px-6 py-6": props.size == "large",
                "px-2 py-2": props.size == "small",
                "p-4": props.size == null,
            },

            // Colors
            "text-primary-600 dark:text-primary-300",
            "placeholder:text-primary-400 dark:placeholder:text-primary-400/60",
            "bg-primary-50 dark:bg-primary-400/10",
            "border-b-2 border-primary-400 dark:border-primary-400/60",

            // States
            {
                "hover:border-primary-500 dark:hover:border-primary-400":
                    !context.disabled,
                "focus:outline-none focus:border-primary-600 dark:focus:border-primary-300":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "rounded-none",
            "appearance-none",
            "transition-colors duration-200",
        ],
    }),
};
