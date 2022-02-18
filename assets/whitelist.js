let whitelist = [
	'0x9194eFdF03174a804f3552F4F7B7A4bB74BaDb7F',
	'0xe29C9BFab812944f388Ce8CAbdD35D446Fa5739C',
	'0x754449696b5bc8483323e8045Dff570c50318317',
	'0xbB0F61dfF51Ff970cd1C252dC47A9C373dd9aE36',
	'0x0138176029FB06cF49EeE9E5208CD11FE5785304',
	'0x01e982CAE54FFc2c0029bD05bDe85e16ff7005d6',
	'0x051d76595DbF1AFc70E349E80396bE0EF3eFEfC7',
	'0x07cc546d52bE955b2BD261B2773c6828609f6EE0',
	'0x0A14EcDd6DB261A2181DCd059bedBCDF6f4dA27e',
	'0x0a6670101787709700311Ad0392C5349F5DF00D5',
	'0x0cff3fa9ee10ef32b118d7bbb625a7e89459516e',
	'0x0E3caaA94f7Ecdf50cBcCFE458C2dcd6826Ebc0A',
	'0x0FdC26F3678d190caB4B09558cECD1d512C6D18A',
	'0x118c5eEd5C93CF3b139268d0E6cCa18cfA7D6b56',
	'0x1200a40C18804F6B5e01f465D5489E53340d61EC',
	'0x149c56e81289501Bb9BfB92f936F5315d2688b8c',
	'0x14D05798E8FB39Ea2604243fb6C4393DD7f36E14',
	'0x1545fB2E6AC600aC62da89E9b9a89C4fe598dC08',
	'0x17EE7Cb48f6106277aa5Ba7872997EE0363b8F5D',
	'0x1a3d1505ccc69431fb51776C97d8ed4f1B7Ad01a',
	'0x1ab794c9c340Dfd37f2d6760fED85DcAcBf5dD99',
	'0x1ba30c643562fbb7a8ee090d4e7e18649b811468',
	'0x1eF24511413467EB1B8d69bE347CeDB938836c27',
	'0x23283805B5beffD9514b6c78Ac312aa601c34525',
	'0x23B922EF299498FAe3ECBec03C20aE32dDe93E67',
	'0x23D1C006c96BD51fd8717ea01BAb147d4b86632C',
	'0x26e1D102f8220ad940C440eD596771bc5E65Dd2d',
	'0x29D844C469745B99daa8979061BB57Eab6Bf54eF',
	'0x29F4Fe365338C828bAe61230E849c156A433C15f',
	'0x29F539c2Fb325e936268d67E17AfcA1281081d11',
	'0x2BeD26e365cA2F0A6d14551C93D3e2f88347c53D',
	'0x2d28B6c49ec079AE15F3564001D03Ef09fb867e5',
	'0x2F6732443698a677aa54d82a445120b39F60f47C',
	'0x2fAcEf0E81922f14286d7A3E525fAca38879d231',
	'0x3043b1CD5A34666274370baA4ef6401D9893519C',
	'0x30904897d1280891EC3dB5Cd1555b4A31f8DFf39',
	'0x342A0ACE6E64b4DE63065fD1261A00EB836d96E7',
	'0x3699aF10B9d090dD148898ee31aFf8E79FcBb859',
	'0x3753f17B37070748A23D1a811fD1f8209fa8FF39',
	'0x3811AfCa8D3441aFEf7FB120810Da630e8339b59',
	'0x387fc36b9f989c6a4bb32eAe7988F63fF7F369a0',
	'0x38E061069b577b92E236603AAF735CF9CBC482E9',
	'0x392358537C9e030eFDeCDF92F48c98ee8C7bac9A',
	'0x3c9dede677fc619b531ce9e799d02d0db4df1951',
	'0x3DF2fcecB1C3484F02e599daFc3e05C2fA9DA7dE',
	'0x3F43004D2692bb59A8147a01C6D9D603209ece93',
	'0x3f4b9BBEb845a9dB5f0783c5a815cC82bCe4f3A1',
	'0x425393223368625a2232A4166DE892e5FAc6BDC7',
	'0x426BF5BAF042Faf30903d262298Ad3E36E8B8C32',
	'0x43f2cF53FA7feD61b68EecB1Ba61b40D8C8809b4',
	'0x47829e099FE2c07262BaA3E7b039876086F4A9D8',
	'0x48db6e5e1c83fb4097fe5f0aba0dc364beaba716',
	'0x4b7e9824dDb295C5542F63e1079C2041D9e624DD',
	'0x4c1CF8B5d1bA5181FaB0aAd005d8bC6C03b4D5CF',
	'0x4d50c5C8E214dd4e1D38d1408F72354AdE3FFa57',
	'0x4DC8a8D1A542eFd0DcA00181B537E67f2ffA8E99',
	'0x4e340964A2fa8f5b8D535D4586c3164664fdcEda',
	'0x50437C92F603E356BAc9E70520Fd483d46Ca02A9',
	'0x50A91CDcaef67a1Be2784B5FB4CB2C9523387061',
	'0x5119A2e6Eefc8d4277A0E59e517d2c3dC379AF9D',
	'0x511e675011856fa5C751de284F7A8046c5e7c78d',
	'0x52595b31e02f432ac80bda2fc09abc7c85aae49f',
	'0x58cb21e6663df3893f5B7167E91F46b9A3941eD4',
	'0x5AcFF9f9565465aDCe07547Ef2d6FA2653F3a109',
	'0x5c64f7d3998a258f41cea81b60b184a8ea1e277f',
	'0x5d031658f4e5abccd55428ff427d84b6b98f537a',
	'0x5Dc9880cC3E23b3E2dCF0c7923db280a3a96acc7',
	'0x5ED2698484c888C5701Bc0Af690ccA67F67Bc000',
	'0x609FF8f3BE3051FEA248908ba272D5cd78582420',
	'0x6228B5564Fad24b0420Dc7e8872529cd52314A5e',
	'0x64D15378c2B45dC099200540B59a6D29Ba3564fF',
	'0x6591B6B3C218aAC4680d74624ae6B6907B2839f9',
	'0x659DB7f3EA1801dDE55259fCCbb1e8608f8eBdEF',
	'0x675232cA357dD2006A29c036ABAF0d1203B9fc1e',
	'0x67d2190ffc4d7f4d924c9faa4d30606b5e93be3d',
	'0x695BB207b781E3055c9F361F31573a9654f540D3',
	'0x6c12E6502dfC7f49D28c1BfD8B9A6C6E2C746A45',
	'0x6d28095B627e05Aa8eD7088E96200c806FbDec0b',
	'0x6ed29609dDEAdC9d314eCF2dbc935426cAf9928E',
	'0x6F14857F776DB9233B61d1c2cb7E912EdB8EB16C',
	'0x70C8825CD741be7750BbC462C776b6A3b6f39551',
	'0x72eC5E31C84bF00936926C01028Ee683Cd313223',
	'0x748D7877e335bdA896D77909F4934b6d1022f089',
	'0x74f1668cea1e733b434dec0d6dcf1f3ec64973d6',
	'0x760Fcce606f2F340fe89886BbD80230C2Bade557',
	'0x766d941b392DC415c7CeAC480632E4105fdDb0E1',
	'0x797bc893b39a6049339905bdad737c0b83d4f63c',
	'0x811A14B787Afc06Ff7599AD6e94f7A85a56a3BDE',
	'0x8243D70dc002fE7Ed746b6E015Da55A2eCa91D02',
	'0x8520F512B1744DEbc7B9459b78e8801AD422F21D',
	'0x87f60e4e7A7134D3c3861490Ba746DED32204da4',
	'0x89aabb6381be046d76930e06a8c21b950ACA4fea',
	'0x8Ad856A7F338Db0e083d6113023Ae8CF4cd2cC29',
	'0x8adD85BD2C3f4563C128025C3Ce736e3442A7FA5',
	'0x8CBC3DE3c1e70Db9fCf4dAed2986A8b090edE15c',
	'0x8d4e8B496fc0c39AAdF6C90f12e1CcdA52e8dBa2',
	'0x903dA3125C683463d411D2ED0b94a27276cEFAfa',
	'0x9194eFdF03174a804f3552F4F7B7A4bB74BaDb7F',
	'0x91D262ba741e46058F68A45b664D8Ff2D4C51596',
	'0x92BCb641BE19c7aD3EF04D83f5fdd54a3D9E8D0B',
	'0x92Cc17C86eBf30Cb1D80c6c7BA497F002E623647',
	'0x9420d14AEA721474f567e7727adAB6cC44C5c424',
	'0x943F9b34B486CD501465dB2023f9Ce26ca9C9d23',
	'0x9659b36fDaBFda916C6fC4ba37e5B3aa5cA92b0B',
	'0x96Ce65aF6E26D2f99Cb96A23AB070a4c8b26C3EE',
	'0x96E2aF1017BBd6Ce3De8F077D0D06Ec7BDbFD694',
	'0x96FF755821E2625a86D697B1Cf7e85c412D5DC24',
	'0x9CEC24a9f82e485cbCA3200E27d7921A9Bd36B9b',
	'0x9e88564c6d61fd5055c54618ecc3d4da59d0f8fe',
	'0x9E9d02B08BcfBa866d58362AeAa09011049df755',
	'0x9eccbec116a705d099bff1b2d7534d3d4e0ea5a5',
	'0x9f941CEa1d1a7dDeae6439F812c4C9C689e4fF61',
	'0xA14DC6dD3896EFFFFAd0D5db28f17d76ca090e73',
	'0xa86E29aF882d6F0a4458a96D2609b147F4259D41',
	'0xa87A302dca474d6a422E01E5935143b7a102b274',
	'0xa92B6F62fBad44F5A9cce938D217e5163E83cD5B',
	'0xa972AbeFedA4d790e1eA9f9F453823aCd8CF2E4b',
	'0xaaD3Ea81fea943662889F23CFbed64d5520D44a4',
	'0xaAebB782808f4e648AE344D496edA6246025da54',
	'0xacA40008a5653B7d280D1d3D69C712b588dee9De',
	'0xad0D65063422DFaE8c873CDb6982A44148000BCE',
	'0xaD4B186d6D5B5966D3922BE7dfA880B3bB5C10D9',
	'0xAD9c36DF334DC412e0D6e2D29e2050C476A51CC4',
	'0xadBD732025Fe48f15Ca3f5bB2f9C1c6F6800A897',
	'0xaf9BAc8F79E59a4b878E3E7B3343C9849Fb79ff2',
	'0xb05b045a913e83c0bb088713bc9ef5026e863997',
	'0xb0d50C730276456B17a482E3747dBAA946f88C2d',
	'0xB5ae950181376E4F8D3589770ff8D45dFF7a0216',
	'0xB6E42C659aa40f2Fc90510717f84260874B8f7c0',
	'0xB74E2CF39168133303B2a0e554674F0FAcf96F97',
	'0xb9245cBd81c5F5d170ce44cf0c40A85c44c385f6',
	'0xBCfd05DdC77C6857a3b0773cAa2C611A462A3010',
	'0xBDA6834486C8eA07b704484d404A08fbfaB0016F',
	'0xBF30e086300937510aa8Faf7C55C537cCc612392',
	'0xC1a1358f837AeD7E101EaFb6d99cC25bF2cb9063',
	'0xC2f7A01ea400d1f3E2A41FcED288813A06Fb06F3',
	'0xC3d384C566e27C3BFf8ADA237B0192f7Da5F6389',
	'0xc5356092613019E32c067C17c7A016b14Da70C11',
	'0xC6A2418c73197e4De33F574c71F95fEb6b6dc5a4',
	'0xC7aBCFd250A29DCa64863E6E0A1B308c07D2a737',
	'0xcc6De8353F52f43dB154E7B9c9d8dac192c32F00',
	'0xce510258888ad226Fa67362d94546e6886BE7018',
	'0xd290a3966cb7744105f2701cc1bc53591a3c03da',
	'0xd4e1b79e446e8019027ad1856b2ad22812c37476',
	'0xd5045483fb08CE80b7B658f54E75527ce626d41C',
	'0xD736C41ea1332727926F7EceFdF53d17eAb0624A',
	'0xD8CaEbd5F6eeEaD5ceC8a0872d14cA32927Ac510',
	'0xDA41b742D78Fa069F4555930f654194e4754B707',
	'0xdB297810D387C5a602f9E6219c9dfA9Bb0e99Ce8',
	'0xDB7EB53A84396eda587F5b3F09f551B46Ec3F55a',
	'0xdfBea6F320b313121753EF8dc2cde2590d23792d',
	'0xe004Add4aF3BcDd376A8Ff83829A77A088b3Dad5',
	'0xe027E35629DBc1594bAC5D27D883650e92bb2b0d',
	'0xE04CdBaef649E8374d9B89aDaeaA6c781262D51f',
	'0xE23C5C33857Db798a87eBc50142C43e39B6Edf34',
	'0xe2e9F3e5E6793c313F76076271bFe535cB27f114',
	'0xe420e87562f70adff0a64f7d179b6bb919e4c986',
	'0xe4De84a762e38d704492684bc122364d9688fa63',
	'0xE6b514032b348130eDa9692AbD4edf7ED63c647c',
	'0xeA5876991ca48E366f46b5BdE5E6aDCfFA2000bc',
	'0xf0c4A744d5763117F8730a1c65A0C0a330894C0C',
	'0xF19221c459f83A0feDC77C47e12AEc183812927a',
	'0xF4feabBaD452700Ad6454c8135eE9d908f43C2d2',
	'0xf8b82d9009329092532ccCa77D34eE23cd407D43',
	'0xFaE01D66619db8F9d2D4e15CEFbfA5Cb34C73d60',
	'0xFbC12715b6883b6ed0C21488d0f84C5132441B0c',
	'0xfE97f3ba5dA378Cd83F94B02DE8358045491D48f'
];

module.exports = { whitelist };