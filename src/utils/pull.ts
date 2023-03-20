import { get } from './request'

/**
 * http2 推送
 */
export const http2Push = () => get('/api/http2')

/**
 * WebScoket 推送
 */
export const socketPush = () => get('/api/scoket')

/**
 * EventSource 推送
 */
export const eventSourcePush = () => get('/api/scoket')
