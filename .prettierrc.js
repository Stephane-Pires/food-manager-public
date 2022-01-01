module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    importOrder: [
        '^next',
        '^@prisma/(.*)$',
        '^@apollo/(.*)$',
        '^@graphql/(.*)$',
        '^@utils/(.*)$',
        '^@lib/(.*)$',
        '^@chakra-ui/(.*)$',
        '^@components/(.*)$',
        '^@styles/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
}