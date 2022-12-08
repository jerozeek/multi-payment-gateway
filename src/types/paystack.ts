export type IResolveAccount = {
    account_number: string;
    bank_code: string;
}

export type IResolveAccountResponse = {
    status: boolean,
    message: string,
    data: {
        account_number: string,
        account_name: string,
    }
}

export type ICreateRecipient = {
    accountName: string;
    accountNumber: string;
    bankCode: string;
    type?: string;
    currency?: string;
}

export type IResolvedRecipient = {
    status: boolean,
    message: string,
    data: {
        active: boolean,
        createdAt: string,
        currency: string,
        domain: string,
        id: number,
        integration: number,
        name:string,
        recipient_code: string,
        type: string,
        updatedAt: string,
        is_deleted: boolean,
        details: {
            authorization_code: null | string,
            account_number: string,
            account_name: string,
            bank_code: string,
            bank_name: string
        }
    }
}

type IHistory = {
    type: string,
    message: string,
    time: number
}

export type ITransactionsVerification = {
    status: boolean,
    message: string,
    data: {
        id: number,
        domain: string,
        status: string,
        reference: string,
        amount: number,
        message: null | string,
        gateway_response: string,
        paid_at: string,
        created_at: string,
        channel: string,
        currency: string,
        ip_address: string,
        metadata: string,
        log: {
            start_time: number,
            time_spent: number,
            attempts: number,
            errors: number,
            success: boolean,
            mobile: boolean,
            input: Array<any>,
            history: IHistory[]
        } | null,
        fees: number,
        fees_split: null | string,
        authorization: {
            authorization_code: string,
            bin: string,
            last4: string,
            exp_month: string,
            exp_year: string,
            channel: string,
            card_type: string,
            bank: string,
            country_code: string,
            brand: string,
            reusable: boolean,
            signature: string,
            account_name: null | string
        },
        customer: {
            id: number,
            first_name: null | string,
            last_name: null | string,
            email: null | string,
            customer_code: string,
            phone: null | string,
            metadata: null | string,
            risk_action: string,
            international_format_phone: null | string,
        },
        plan: null,
        split?: object,
        order_id?: null | string,
        paidAt?: string,
        createdAt?: string,
        requested_amount?: number,
        pos_transaction_data?: null | string,
        source?: null | string,
        fees_breakdown?: null | string,
        transaction_date?: string,
        plan_object?: object,
        subaccount?: object
    }
}

export type ICreateBulkRecipient = {
    batch: ICreateRecipient[];
}

export type IResolvedBuckRecipient = {
    status: boolean;
    message: string;
    data: {
        success: IResolvedRecipient[];
    }
}

export type ITransferRecipientList= {
    status: boolean;
    message: string;
    data: ITransferRecipient[];
}

export type ITransferRecipient = {
    domain: string,
    type: string,
    currency: string,
    name: string,
    details: {
        account_number: string,
        account_name: null | string,
        bank_code: string,
        bank_name: string,
    },
    metadata: {
        job: string,
    },
    recipient_code: string,
    active: true,
    id: 28,
    createdAt: string,
    updatedAt: string,

}

export type ISingleTransfer = {
    currency: string,
    source: string,
    amount: number,
    recipient: string,
    reference?: string,
}

export type TransferResponse = {
    status: boolean,
    message: string,
    data: {
        integration: number,
        domain: string,
        amount: number,
        currency: string,
        source: string,
        reason: string,
        recipient: number,
        status: string,
        transfer_code: string,
        id: number,
        createdAt: string,
        updatedAt: string,
    }
}

export type IBulkTransfer = {
    currency: string,
    source: string,
    transfers: ISingleTransfer[],
}

export type ITransferList = {
    recipient: string,
    amount: number,
    transfer_code: string,
    currency: string,
}

export type IRecurrentPayload = {
    email: string,
    amount: number,
    authorization_code: string,
}

export type IBulkTransferList = {
    status: boolean,
    message: string,
    data: ITransferList[]
}

export type IBankListing = {
    status: boolean,
    message: string,
    data: IBank[]
}


export type IBank = {
    name: string,
    slug: string,
    code: string,
    longcode: string,
    gateway: string | null,
    pay_with_bank: boolean,
    active: boolean,
    is_deleted: boolean,
    country: string,
    currency: string,
    type: string,
    id: number,
    createdAt: string,
    updatedAt: string,
}
