'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = {

    /**
     * function to get the match by id
     * @param {*} match_Id 
     */
    getMatchByID: function (match_Id) {
        const params = {
            TableName: process.env.TABLE_NAME,
            Key: { match_Id }
        };
        return dynamoDb.get(params).promise()
            .then(r => r.Item);
    },
    
    /**
     * function to get all the matches for a date range
     * @param {*} start_date 
     * @param {*} end_date 
     */
    getMatchesByDateRange: function (start_date, end_date) {
        const params = {
            TableName: process.env.TABLE_NAME,
            IndexName: 'matchdate_ist-index',
            KeyConditionExpression: '#matchdate_ist BETWEEN :fromDate AND :toDate',
            ExpressionAttributeNames: {
                '#matchdate_ist': 'matchdate_ist',
            },
            ExpressionAttributeValues: {
                ':fromDate': start_date,
                ':toDate': end_date,
            },
        };
        return dynamoDb.query(params).promise()
            .then(r => r.Item);
    },
    
    /**
     * function to update series_name
     * @param {*} data 
     */
    updateMatchField: function (data) {

        const params = {
            TableName: process.env.TABLE_NAME,
            Key: { "matchID" : data.match_Id },
            UpdateExpression: "SET series_name = :name",
            ExpressionAttributeValues: { 
            ":name": data.series_name
            }          
        };

        return dynamoDb.update(params).promise()
            .then(result => result.Item)
    },

    /**
     * function to insert a new match to the db
     * @param {} data 
     */
    createMatch : function (data) {

        const params = {
            TableName: process.env.TABLE_NAME,
            Item: {
                daynight: data.daynight,
                gmt_offset: data.gmt_offset,
                group: data.group,
                league: data.league,
                live: data.live,
                livecoverage: data.livecoverage,
                comp_type_id: data.comp_type_id,
                comp_type:  data.comp_type,
                match_Id:  data.match_Id,
                matchfile:  data.matchfile,
                matchnumber:  data.matchnumber,
                matchresult:  data.matchresult,
                matchstatus:  data.matchstatus,
                matchdate_gmt:  data.matchdate_gmt,
                matchdate_ist:  data.matchdate_ist,
                matchdate_local:  data.matchdate_local,
                matchtime_gmt:  data.matchtime_gmt,
                matchtime_ist:  data.matchtime_ist,
                matchtime_local:  data.matchtime_local,
                end_matchdate_gmt:  data.end_matchdate_gmt,
                end_matchdate_ist:  data.end_matchdate_ist,
                end_matchdate_local:  data.end_matchdate_local,
                end_matchtime_gmt:  data.end_matchtime_gmt,
                end_matchtime_ist:  data.end_matchtime_ist,
                end_matchtime_local:  data.end_matchtime_local,
                matchtype:  data.matchtype,
                priority:  data.priority,
                recent:  data.recent,
                series_Id:  data.series_Id,
                seriesname:  data.seriesname,
                series_start_date:  data.series_start_date,
                series_end_date: data.series_end_date,
                stage:  data.stage,
                teama_Id:  data.teama_Id,
                teama:  data.teama,
                teama_short: data.teama_short,
                teama_runs:  data.teama_runs,
                teama_wickets:  data.teama_wickets,
                teama_overs:  data.teama_overs,
                teamb_Id:  data.teamb_Id,
                teamb:  data.teamb,
                teamb_short:  data.teamb_short,
                teamb_runs:  data.teamb_runs,
                teamb_wickets:  data.teamb_wickets,
                teamb_overs:  data.teamb_overs,
                tour_Id:  data.tour_Id,
                tourname:  data.tourname,
                upcoming:  data.upcoming,
                venue:  data.venue,
                venue_Id:  data.venue_Id,
                winningmargin:  data.winningmargin,
                winningteam_Id:  data.winningteam_Id,
                toss_elected_to:  data.toss_elected_to,
                toss_won_by:  data.toss_won_by,
                series_short_display_name:  data.series_short_display_name,
                series_type:  data.series_type,
                has_comm:  data.has_comm,
                has_scores:  data.has_scores,
                teama_hassquads:  data.teama_hassquads,
                teamb_hassquads: data.teamb_hassquads ,
                parent_id:  data.parent_id,
                parent_name:  data.parent_name,
                has_standings:  data.has_standings,
                matchstatus_Id:  data.matchstatus_Id,
                match_ordinal:  data.match_ordinal,
                coverage_level_id: data.coverage_level_id ,
                coverage_level: data.coverage_level 
            }
        };

        return dynamoDb.put(params).promise()
            .then(result => result.Item)
    },

}

