export default interface EmbedField {

    /**
     * Name of the field.
     * Up to 256 characters.
     */
    name: string;

    /**
     * Value of the field.
     * Up to 1024 characters.
     */
    value: string;

    /**
     * Whether or not this field should be displayed inline.
     */
    inline?: boolean;

}