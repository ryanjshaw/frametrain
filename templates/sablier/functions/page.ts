'use server'
import type { FrameActionPayload } from '@/lib/farcaster'
import { loadGoogleFontAllVariants } from '@/lib/fonts'
import { buildFramePage } from '@/lib/sdk'
import satori from 'satori'
import type { Config, State } from '..'
import { getStreamData, getStreamHistory } from '../utils/actions'
import HistoryView from '../views/History'
import TokenView from '../views/Token'
import initial from './initial'

export default async function page(
    body: FrameActionPayload,
    config: Config,
    state: State,
    params: any
) {
    const buttonIndex = body.untrustedData.buttonIndex

    console.log('body', body)

    let frame

    switch (buttonIndex) {
        case 2: {
            const roboto = await loadGoogleFontAllVariants('Roboto')

            const data = await getStreamData(config.streamId)

            const r = await satori(TokenView(data), {
                height: 302,
                width: 540,
                fonts: roboto,
            })

            frame = await buildFramePage({
                buttons: [
                    {
                        label: 'Summary',
                    },
                    {
                        label: 'Token',
                    },
                    {
                        label: 'History',
                    },
                    {
                        label: 'Create',
                    },
                ],
                image: 'data:image/svg+xml;base64,' + Buffer.from(r).toString('base64'),
                aspectRatio: '1.91:1',
                config: config,
                function: 'page',
            })

            break
        }

        case 3: {
            const roboto = await loadGoogleFontAllVariants('Roboto')

            const data = await getStreamData(config.streamId)

            const history = await getStreamHistory(config.streamId)

            const r = await satori(HistoryView(data, history), {
                height: 302,
                width: 540,
                fonts: roboto,
            })

            frame = await buildFramePage({
                buttons: [
                    {
                        label: 'Summary',
                    },
                    {
                        label: 'Token',
                    },
                    {
                        label: 'History',
                    },
                    {
                        label: 'Create',
                    },
                ],
                image: 'data:image/svg+xml;base64,' + Buffer.from(r).toString('base64'),
                aspectRatio: '1.91:1',
                config: config,
                function: 'page',
            })

            break
        }


        default: {
            frame = await initial(config, state)
            break
        }
    }

    return {
        frame: frame,
        state: state,
    }
}