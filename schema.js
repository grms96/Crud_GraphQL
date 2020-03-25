'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

const {getMatchByID, getMatchesByDateRange, updateMatchField, createMatch} = require('./resolvers/matches');


const matchType = new GraphQLObjectType({
    name: 'Match',
    fields: {   
        daynight: { 
            type: new GraphQLNonNull(GraphQLString) },
            gmt_offset: { type: new GraphQLNonNull(GraphQLString) },
            group: { type: new GraphQLNonNull(GraphQLString) },
            league: { type: new GraphQLNonNull(GraphQLString) },
            live: { type: new GraphQLNonNull(GraphQLString) },
            livecoverage: { type: new GraphQLNonNull(GraphQLString) },
            comp_type_id: { type: new GraphQLNonNull(GraphQLString) },
            comp_type:  { type: new GraphQLNonNull(GraphQLString) },
            match_Id:  { type: new GraphQLNonNull(GraphQLString) },
            matchfile:  { type: new GraphQLNonNull(GraphQLString) },
            matchnumber:  { type: new GraphQLNonNull(GraphQLString) },
            matchresult:  { type: new GraphQLNonNull(GraphQLString) },
            matchstatus:  { type: new GraphQLNonNull(GraphQLString) },
            matchdate_gmt:  { type: new GraphQLNonNull(GraphQLString) },
            matchdate_ist:  { type: new GraphQLNonNull(GraphQLString) },
            matchdate_local:  { type: new GraphQLNonNull(GraphQLString) },
            matchtime_gmt:  { type: new GraphQLNonNull(GraphQLString) },
            matchtime_ist:  { type: new GraphQLNonNull(GraphQLString) },
            matchtime_local:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchdate_gmt:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchdate_ist:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchdate_local:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchtime_gmt:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchtime_ist:  { type: new GraphQLNonNull(GraphQLString) },
            end_matchtime_local:  { type: new GraphQLNonNull(GraphQLString) },
            matchtype:  { type: new GraphQLNonNull(GraphQLString) },
            priority:  { type: new GraphQLNonNull(GraphQLString) },
            recent:  { type: new GraphQLNonNull(GraphQLString) },
            series_Id:  { type: new GraphQLNonNull(GraphQLString) },
            seriesname:  { type: new GraphQLNonNull(GraphQLString) },
            series_start_date:  { type: new GraphQLNonNull(GraphQLString) },
            series_end_date:  { type: new GraphQLNonNull(GraphQLString) },
            stage:  { type: new GraphQLNonNull(GraphQLString) },
            teama_Id:  { type: new GraphQLNonNull(GraphQLString) },
            teama:  { type: new GraphQLNonNull(GraphQLString) },
            teama_short:  { type: new GraphQLNonNull(GraphQLString) },
            teama_runs:  { type: new GraphQLNonNull(GraphQLString) },
            teama_wickets:  { type: new GraphQLNonNull(GraphQLString) },
            teama_overs:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_Id:  { type: new GraphQLNonNull(GraphQLString) },
            teamb:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_short:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_runs:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_wickets:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_overs:  { type: new GraphQLNonNull(GraphQLString) },
            tour_Id:  { type: new GraphQLNonNull(GraphQLString) },
            tourname:  { type: new GraphQLNonNull(GraphQLString) },
            upcoming:  { type: new GraphQLNonNull(GraphQLString) },
            venue:  { type: new GraphQLNonNull(GraphQLString) },
            venue_Id:  { type: new GraphQLNonNull(GraphQLString) },
            winningmargin:  { type: new GraphQLNonNull(GraphQLString) },
            winningteam_Id:  { type: new GraphQLNonNull(GraphQLString) },
            toss_elected_to:  { type: new GraphQLNonNull(GraphQLString) },
            toss_won_by:  { type: new GraphQLNonNull(GraphQLString) },
            series_short_display_name:  { type: new GraphQLNonNull(GraphQLString) },
            series_type:  { type: new GraphQLNonNull(GraphQLString) },
            has_comm:  { type: new GraphQLNonNull(GraphQLString) },
            has_scores:  { type: new GraphQLNonNull(GraphQLString) },
            teama_hassquads:  { type: new GraphQLNonNull(GraphQLString) },
            teamb_hassquads:  { type: new GraphQLNonNull(GraphQLString) },
            parent_id:  { type: new GraphQLNonNull(GraphQLString) },
            parent_name:  { type: new GraphQLNonNull(GraphQLString) },
            has_standings:  { type: new GraphQLNonNull(GraphQLString) },
            matchstatus_Id:  { type: new GraphQLNonNull(GraphQLString) },
            match_ordinal:  { type: new GraphQLNonNull(GraphQLString) },
            coverage_level_id:  { type: new GraphQLNonNull(GraphQLString) },
            coverage_level:  { type: new GraphQLNonNull(GraphQLString) }
    }
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            getMatchByID: {
                args: {
                    matchId: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: macthType,
                resolve: (parent, args) => getMatchByID(args.matchId)
            },
            getMatchesByDateRange: {
                type: new GraphQLList(matchType),
                args: {
                    start_date: { type: new GraphQLNonNull(GraphQLString) },
                    end_date: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve: (parent, args) => getMatchesByDateRange(args.start_date, args.end_date)
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            updateMatchField: {
                args: {
                    seriesname:  { type: new GraphQLNonNull(GraphQLString) },
                    matchId: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: matchType,
                resolve: (parent, args) => updateMatchField(args)
            },
            createMatch: {
                args: {
                    daynight: { type: new GraphQLNonNull(GraphQLString) },
                    gmt_offset: { type: new GraphQLNonNull(GraphQLString) },
                    group: { type: new GraphQLNonNull(GraphQLString) },
                    league: { type: new GraphQLNonNull(GraphQLString) },
                    live: { type: new GraphQLNonNull(GraphQLString) },
                    livecoverage: { type: new GraphQLNonNull(GraphQLString) },
                    comp_type_id: { type: new GraphQLNonNull(GraphQLString) },
                    comp_type:  { type: new GraphQLNonNull(GraphQLString) },
                    match_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    matchfile:  { type: new GraphQLNonNull(GraphQLString) },
                    matchnumber:  { type: new GraphQLNonNull(GraphQLString) },
                    matchresult:  { type: new GraphQLNonNull(GraphQLString) },
                    matchstatus:  { type: new GraphQLNonNull(GraphQLString) },
                    matchdate_gmt:  { type: new GraphQLNonNull(GraphQLString) },
                    matchdate_ist:  { type: new GraphQLNonNull(GraphQLString) },
                    matchdate_local:  { type: new GraphQLNonNull(GraphQLString) },
                    matchtime_gmt:  { type: new GraphQLNonNull(GraphQLString) },
                    matchtime_ist:  { type: new GraphQLNonNull(GraphQLString) },
                    matchtime_local:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchdate_gmt:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchdate_ist:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchdate_local:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchtime_gmt:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchtime_ist:  { type: new GraphQLNonNull(GraphQLString) },
                    end_matchtime_local:  { type: new GraphQLNonNull(GraphQLString) },
                    matchtype:  { type: new GraphQLNonNull(GraphQLString) },
                    priority:  { type: new GraphQLNonNull(GraphQLString) },
                    recent:  { type: new GraphQLNonNull(GraphQLString) },
                    series_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    seriesname:  { type: new GraphQLNonNull(GraphQLString) },
                    series_start_date:  { type: new GraphQLNonNull(GraphQLString) },
                    series_end_date:  { type: new GraphQLNonNull(GraphQLString) },
                    stage:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    teama:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_short:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_runs:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_wickets:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_overs:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_short:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_runs:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_wickets:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_overs:  { type: new GraphQLNonNull(GraphQLString) },
                    tour_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    tourname:  { type: new GraphQLNonNull(GraphQLString) },
                    upcoming:  { type: new GraphQLNonNull(GraphQLString) },
                    venue:  { type: new GraphQLNonNull(GraphQLString) },
                    venue_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    winningmargin:  { type: new GraphQLNonNull(GraphQLString) },
                    winningteam_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    toss_elected_to:  { type: new GraphQLNonNull(GraphQLString) },
                    toss_won_by:  { type: new GraphQLNonNull(GraphQLString) },
                    series_short_display_name:  { type: new GraphQLNonNull(GraphQLString) },
                    series_type:  { type: new GraphQLNonNull(GraphQLString) },
                    has_comm:  { type: new GraphQLNonNull(GraphQLString) },
                    has_scores:  { type: new GraphQLNonNull(GraphQLString) },
                    teama_hassquads:  { type: new GraphQLNonNull(GraphQLString) },
                    teamb_hassquads:  { type: new GraphQLNonNull(GraphQLString) },
                    parent_id:  { type: new GraphQLNonNull(GraphQLString) },
                    parent_name:  { type: new GraphQLNonNull(GraphQLString) },
                    has_standings:  { type: new GraphQLNonNull(GraphQLString) },
                    matchstatus_Id:  { type: new GraphQLNonNull(GraphQLString) },
                    match_ordinal:  { type: new GraphQLNonNull(GraphQLString) },
                    coverage_level_id:  { type: new GraphQLNonNull(GraphQLString) },
                    coverage_level:  { type: new GraphQLNonNull(GraphQLString) }
                },
                type: matchType,
                resolve: (parent, args) => createMatch(args)
            },
        }
    })
});

module.exports = schema;