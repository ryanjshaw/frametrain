
import { chainIdToMetadata } from '../utils/constants'

export default function TokenView(streamData: any) {
    const { chainId, asset } = streamData

    const chainName = chainIdToMetadata[chainId].name
	const chainColor = chainIdToMetadata[chainId].color

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                height: '100%',
                width: '100%',
                backgroundImage: `linear-gradient(to top, #2a2432 55%, ${chainColor})`,
                // backgroundImage: 'url(' + process.env.NEXT_PUBLIC_HOST + bg.src + ')',
                // backgroundSize: '100% 100%',
                // backgroundRepeat: 'no-repeat',
                color: '#ffffff',
                padding: '15px',
                gap: '15px',
                fontFamily: 'Urbanist',
            }}
        >
            <span
                style={{
                    fontFamily: 'Catamaran',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'orange',
                }}
            >
                Token Details
            </span>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexGrow: '1',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '15px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    gap: '5px',
                    border: '1px solid #392a3b',
                }}
            >
                <div style={tokenRowStyle}>
                    <span>NAME</span>
                    <span style={{ fontWeight: 900, fontSize: '16px' }}>{asset.name}</span>
                </div>
                <div style={tokenRowStyle}>
                    <span>SYMBOL</span>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <img
                            src={asset.logo}
                            style={{ borderRadius: '50%' }}
                            alt=""
                            width={20}
                            height={20}
                        />

                        <span style={{ fontWeight: 900, fontSize: '16px' }}>{asset.symbol}</span>
                    </div>
                </div>
                <div style={tokenRowStyle}>
                    <span>DECIMALS</span>
                    <span style={{ fontWeight: 900, fontSize: '16px' }}>{asset.decimals}</span>
                </div>
                <div style={tokenRowStyle}>
                    <span>ADDRESS</span>
                    <div
                        style={{
                            display: 'flex',
                            fontWeight: 900,
                            fontSize: '16px',
                        }}
                    >
                        {asset.address}
                    </div>
                </div>
                <div style={tokenRowStyle}>
                    <span>NETWORK</span>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <img src={chainIdToMetadata[chainId].icon} alt="" width={20} height={20} />

                        <span style={{ fontWeight: 900, fontSize: '16px' }}>
                            {chainName.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

  
}

const tokenRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '18px',
} as const