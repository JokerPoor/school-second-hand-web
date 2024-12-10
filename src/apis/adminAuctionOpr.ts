import request from '@/request'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export enum E_PaymentStatus {
    PENDING,  // 待支付
    PAID,     // 已支付
    UNPAID    // 未支付
}

export enum E_AuctionStatus {
    PENDING,   // 待开始
    ONGOING,   // 进行中
    SOLD,      // 已售
    CANCELLED,  // 已取消
    Banned // 被封禁
}

export declare interface I_AdminAuctionVO {
    auctionId: number
    title: string
    endTime: string
    startTime: string
    paymentStatus: E_PaymentStatus
    status: E_AuctionStatus
}

export function getAdminAuctionControllerAdminAuction(options: AxiosRequestConfig) {
    return request<any, AxiosResponse<{
        list: I_AdminAuctionVO[],
        total: number
    }>>({
        url: '/AdminAuctionController/AdminAuction',
        method: 'post',
        ...options
    })
}