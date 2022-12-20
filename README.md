# A NodeJS Package that makes implementation of multiple payment Gateways endpoints and webhooks seamless

## Installation

You can install the package via composer:

```bash
npm install multi-payment-gateway
```

## Usage

```nodejs
import { Paystack } from 'multi-payment-gateway';
const paystack = new Paystack('sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
```

## Endpoints implemented

```bash
# createRecipient
# resolveAccount
# verifyTransaction
# getBanks
# initiateTransfer
# chargeAuthorization
```

## Testing

```bash
npm run test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Jerozeek](https://github.com/Jerozeek)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
