# Holidates
An API for getting the dates of German holidays.

This API uses data from [schulferien.org](https://schulferien.org), I don't guarantee for it beeing right.

## API Usage (v1)

You can also check out the [API documentation](https://holidates.valentinlehmann.de/v1/docs).

### States
For the state argument, you have to use the state codes based on `ISO 3166-2:DE`.

### Current Route
Get all current holidays (state is optional, if not provided, all holidays are returned). Returns an array with the current holidays or an error message.
```https://holidates.valentinlehmann.de/v1/current/:state?```

### Next Route
Get next holidays for the given state. Returns an object with the next holidays or an error message.
```https://holidates.valentinlehmann.de/v1/next/:state```

### Upcoming Route
Get all upcoming holidays (state is optional, if not provided, all holidays are returned). Returns an array with the upcoming holidays or an error message.
```https://holidates.valentinlehmann.de/v1/upcoming/:state?```
