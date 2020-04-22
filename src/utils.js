export const costInCents = dollarPrice => 100 * dollarPrice;

export const formatCost = cost => {
    const dollars = Math.floor(cost/100);
    const cents = (cost % 100);
    let formatted = '$';
    if (dollars)
        formatted += dollars;
    else
        formatted += '0';

    formatted += '.';
    if (cents === 0)
        formatted += '00';
    else if (cents < 10)
        formatted += '0' + cents
    else
        formatted += cents;
    return formatted;
}