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
            "text-gray-600 dark:text-gray-200",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "bg-gray-50 dark:bg-gray-800",
            "border-2 border-gray-300 dark:border-gray-700",

            // States
            {
                "hover:border-gray-400 dark:hover:border-gray-600":
                    !context.disabled,
                "focus:outline-none focus:border-teal-500 dark:focus:border-teal-400":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "rounded-full",
            "appearance-none",
            "transition-colors duration-200",
        ],
    }),
};
