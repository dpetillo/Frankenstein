import superagent from 'superagent'
import cookie from 'react-cookie'

export const fetchFeatureList = () => {
  return $.ajax({
    method: "GET",
    url: '/api/v1/features'
  })
}

export const fetchSourceDocs = (securityId) => {
  return $.ajax({
    method: "GET",
    url: `/api/v1/infotabs/version1?instrumentid=${securityId}`
  })
}

export const fetchCollateralDocs = (securityId) => {
  return $.ajax({
    method: "GET",
    url: `/api/v1/infotabs/collateral-docs?instrumentid=${securityId}`
  })
}

export const fetchInstruments = (instrumentIds) => {
    return $.ajax({
    method: "GET",
    url: `/api/v1/instruments/get-data?instrumentId=` + Array.join(instrumentIds, '&instrumentId=')
  })
}

export const fetchPositionList = (userId, watchlistId) => {
  return $.ajax({
    method: "GET",
    url: `/api/v1/portfolio/position/list?portfolioId=${watchlistId}&userId=${userId}`
  })
}

export const addPortfolioPositionByCusip = (sendObject) => {
  // return $.ajax({
  //   method: "POST",
  //   url: `/api/v1/portfolio/position/add`,
  //   contentType: 'application/json',
  //   data: sendObject,
  // })
  return superagent
    .post('/api/v1/portfolio/position/add')
    .send(sendObject)

}

export const fetchUniversalSearchItems = (searchText) => {
  let text = encodeURIComponent(searchText);

  return $.ajax({
    method: "GET",
    url: `/api/v1/universal-search?search=${text}`
  })
}
