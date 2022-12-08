import axios, { AxiosResponse } from 'axios';
import {
    IBankListing, IBulkTransfer,
    ICreateRecipient, IRecurrentPayload,
    IResolveAccount,
    IResolveAccountResponse,
    IResolvedRecipient, ISingleTransfer,
    ITransactionsVerification, TransferResponse
} from "../types/paystack";

export class PayStackHandler {

    constructor(private authorization: string) {
        axios.create({
            baseURL: 'https://api.paystack.co',
            headers:{
                'Authorization': `Bearer ${this.authorization}`,
                "content-type": "application/json",
                "cache-control": "no-cache",
            }
        })
    }

    public async createRecipient(data:ICreateRecipient) {
        const res = <AxiosResponse> await axios.post('/transferrecipient', JSON.stringify(data));
        return res.data as IResolvedRecipient;
    };

    public async resolveAccount(data:IResolveAccount) {
        const res = <AxiosResponse> await axios.get(`/bank/resolve?account_number=${data.account_number}&bank_code=${data.bank_code}`);
        return res.data as IResolveAccountResponse;
    };

    public async verifyTransaction(reference: string): Promise<any> {
        const res = <AxiosResponse> await axios.get(`/transaction/verify/${encodeURIComponent(reference)}`);
        return res.data as ITransactionsVerification;
    }

    public async getBanks() {
        const res = <AxiosResponse> await axios.get(`/bank`);
        return res.data as IBankListing;
    }

    public static async initiateTransfer(payload: ISingleTransfer | IBulkTransfer ) {
        const res = <AxiosResponse> await axios.post('/transfer', JSON.stringify(payload));
        return res.data as TransferResponse;
    }

    public async chargeAuthorization(payload: IRecurrentPayload){
        const res = <AxiosResponse> await axios.post('/transaction/charge_authorization', JSON.stringify(payload));
        return res.data as ITransactionsVerification;
    }
}
