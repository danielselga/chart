//API SYMBOL

symbol:
[
    {
        "symbol": "<short symbol name>", //BTC,WINFUT,ETH...
        "full_name": "<full symbol name>", // e.g. BTCE:BTCUSD BITCOIN, Indice Futuro, 
        "description": "<symbol description>", //Descrição do Simbolo, irá aparecer na legenda 
        "exchange": "<symbol exchange name>", //Nome da Corretora.
        "ticker": "<symbol ticker name, optional>",  //It's an unique identifier for this particular symbol in your symbology. 
        // If you specify this property then its value will be used for all data requests for this symbol. 
        // ticker will be treated the same as name if not specified explicitly.
        "type": "stock", // or "futures" or "bitcoin" or "forex" or "index"
        "session:": "<24x7>" //periodo de operação da moeda (opicional)
    },
    {
        //    .....
    }
]
//Ticker: 
//É um identificador unico para um simbolo em particular em sua simbologia.
//Se você especificar essa propriedade o valor será usado para todas as requisições de dados para esse symbolo.
//Ticker vai ser tratado da mesma forma como o nome se não for especificado explicitamente. 


//Trading Sessions
// É um simbolo particular que é passado para a lib no campo de sessões na informação do symbol.
//O formato de hora é HHMM-HHMM (HORAMINUTO-HORAMINUTO), se a sessão começar as 9:30 e terminar as 4:00 pm o formato deverá ser
//0930-1600. Existe um caso especial caso o symbol for 24/7 ele tem que ser especificado como 24x7.

//holidays
// A lista de feriados para esse symbolo. Essas datas não aparecem no grafico, é uma sring no seguinte formato: YYYYMMDD[,YYYYMMDD]
//Exemplo 20181105,20181107,20181112.

//Corrections
//Lista de correções para esse simbolo. Correções são dias com trading sessions especificas. eles podem ser aplicados nos feriasdos
//SESSION:YYYYMMDD[,YYYYMMDD][;SESSION:YYYYMMDD[,YYYYMMDD]]

const symbolInfo = {
    ticker: symbolItem.full_name,
    name: symbolItem.symbol,
    description: symbolItem.description,
    type: symbolItem.type,
    session: '24x7',
    timezone: 'Etc/UTC',
    exchange: symbolItem.exchange,
    minmov: 1,
    pricescale: 100,
    has_intraday: false,
    has_no_volume: true,
    has_weekly_and_monthly: false,
    supported_resolutions: configurationData.supported_resolutions,
    volume_precision: 2,
    data_status: 'streaming',
};


//ONREADY:
// ESSA CHAMADA É ENCARREGADA DE PROVER O OBJETO ARQUIVADO COM O DATA COFIG, A LIB ASSUME QUE VOCÊ VAI CHAMAR A FUNÇÃO DE CALLBACK
// E PASSAR SEU DATAFEED CONFIGURATIONDATA COMO ARGUMENTO

//EXCHANGES:
// Um array com a descrição das corretoras, o Exchange descriptor é um objeto {valor, nome, descrição}. O Valor vai ser 
// como argumento exchange para searchSymbols.

//exchanges = [] leva à ausência do filtro de corretoras na lista de pesquisa de símbolos.

//Symbol_types = [] leva a ausencia do tipo de filtro em sybol search. Usa value="" se você deseja incluir todos os tipos de
//filtros.

//suported_resolutions
//Um arry de suportedRsolutions. Resolution precisa de ser uma string. 