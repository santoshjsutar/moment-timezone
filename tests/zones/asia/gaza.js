"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Gaza"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Gaza", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Gaza", { abbr: true }),

	"1940" : helpers.makeTestYear("Asia/Gaza", [
		["1940-05-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1940-05-31T22:00:00+00:00", "01:00:00", "EEST", -180]
	]),

	"1942" : helpers.makeTestYear("Asia/Gaza", [
		["1942-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1942-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1943" : helpers.makeTestYear("Asia/Gaza", [
		["1943-03-31T23:59:59+00:00", "01:59:59", "EET", -120],
		["1943-04-01T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1943-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1943-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1944" : helpers.makeTestYear("Asia/Gaza", [
		["1944-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1944-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1944-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1944-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1945" : helpers.makeTestYear("Asia/Gaza", [
		["1945-04-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["1945-04-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1945-10-31T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1945-10-31T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1946" : helpers.makeTestYear("Asia/Gaza", [
		["1946-04-15T23:59:59+00:00", "01:59:59", "EET", -120],
		["1946-04-16T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1946-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1946-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1957" : helpers.makeTestYear("Asia/Gaza", [
		["1957-05-09T21:59:59+00:00", "23:59:59", "EET", -120],
		["1957-05-09T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1957-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1957-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1958" : helpers.makeTestYear("Asia/Gaza", [
		["1958-04-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1958-04-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1958-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1958-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1959" : helpers.makeTestYear("Asia/Gaza", [
		["1959-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1959-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1959-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1959-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1960" : helpers.makeTestYear("Asia/Gaza", [
		["1960-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1960-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1960-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1960-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1961" : helpers.makeTestYear("Asia/Gaza", [
		["1961-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1961-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1961-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1961-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1962" : helpers.makeTestYear("Asia/Gaza", [
		["1962-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1962-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1962-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1962-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1963" : helpers.makeTestYear("Asia/Gaza", [
		["1963-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1963-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1963-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1963-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1964" : helpers.makeTestYear("Asia/Gaza", [
		["1964-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1964-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1964-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1964-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1965" : helpers.makeTestYear("Asia/Gaza", [
		["1965-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1965-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1965-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1965-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1966" : helpers.makeTestYear("Asia/Gaza", [
		["1966-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1966-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1966-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1966-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1967" : helpers.makeTestYear("Asia/Gaza", [
		["1967-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1967-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1967-06-04T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1967-06-04T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1974" : helpers.makeTestYear("Asia/Gaza", [
		["1974-07-06T21:59:59+00:00", "23:59:59", "IST", -120],
		["1974-07-06T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1974-10-12T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1974-10-12T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1975" : helpers.makeTestYear("Asia/Gaza", [
		["1975-04-19T21:59:59+00:00", "23:59:59", "IST", -120],
		["1975-04-19T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1975-08-30T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1975-08-30T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1980" : helpers.makeTestYear("Asia/Gaza", [
		["1980-08-01T21:59:59+00:00", "23:59:59", "IST", -120],
		["1980-08-01T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1980-09-12T21:59:59+00:00", "00:59:59", "IDT", -180],
		["1980-09-12T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"1984" : helpers.makeTestYear("Asia/Gaza", [
		["1984-05-04T21:59:59+00:00", "23:59:59", "IST", -120],
		["1984-05-04T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1984-08-24T21:59:59+00:00", "00:59:59", "IDT", -180],
		["1984-08-24T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"1985" : helpers.makeTestYear("Asia/Gaza", [
		["1985-04-13T21:59:59+00:00", "23:59:59", "IST", -120],
		["1985-04-13T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1985-09-14T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1985-09-14T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1986" : helpers.makeTestYear("Asia/Gaza", [
		["1986-05-17T21:59:59+00:00", "23:59:59", "IST", -120],
		["1986-05-17T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1986-09-06T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1986-09-06T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1987" : helpers.makeTestYear("Asia/Gaza", [
		["1987-04-14T21:59:59+00:00", "23:59:59", "IST", -120],
		["1987-04-14T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1987-09-12T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1987-09-12T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1988" : helpers.makeTestYear("Asia/Gaza", [
		["1988-04-09T21:59:59+00:00", "23:59:59", "IST", -120],
		["1988-04-09T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1988-09-03T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1988-09-03T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1989" : helpers.makeTestYear("Asia/Gaza", [
		["1989-04-29T21:59:59+00:00", "23:59:59", "IST", -120],
		["1989-04-29T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1989-09-02T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1989-09-02T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1990" : helpers.makeTestYear("Asia/Gaza", [
		["1990-03-24T21:59:59+00:00", "23:59:59", "IST", -120],
		["1990-03-24T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1990-08-25T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1990-08-25T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1991" : helpers.makeTestYear("Asia/Gaza", [
		["1991-03-23T21:59:59+00:00", "23:59:59", "IST", -120],
		["1991-03-23T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1991-08-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1991-08-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1992" : helpers.makeTestYear("Asia/Gaza", [
		["1992-03-28T21:59:59+00:00", "23:59:59", "IST", -120],
		["1992-03-28T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1992-09-05T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1992-09-05T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1993" : helpers.makeTestYear("Asia/Gaza", [
		["1993-04-01T21:59:59+00:00", "23:59:59", "IST", -120],
		["1993-04-01T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1993-09-04T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1993-09-04T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1994" : helpers.makeTestYear("Asia/Gaza", [
		["1994-03-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1994-03-31T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1994-08-27T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1994-08-27T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1995" : helpers.makeTestYear("Asia/Gaza", [
		["1995-03-30T21:59:59+00:00", "23:59:59", "IST", -120],
		["1995-03-30T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1995-09-02T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1995-09-02T21:00:00+00:00", "23:00:00", "IST", -120],
		["1995-12-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1995-12-31T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Asia/Gaza", [
		["1996-04-04T21:59:59+00:00", "23:59:59", "EET", -120],
		["1996-04-04T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1996-09-19T21:59:59+00:00", "00:59:59", "EEST", -180],
		["1996-09-19T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Asia/Gaza", [
		["1997-04-03T21:59:59+00:00", "23:59:59", "EET", -120],
		["1997-04-03T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1997-09-18T21:59:59+00:00", "00:59:59", "EEST", -180],
		["1997-09-18T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Asia/Gaza", [
		["1998-04-02T21:59:59+00:00", "23:59:59", "EET", -120],
		["1998-04-02T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1998-09-17T21:59:59+00:00", "00:59:59", "EEST", -180],
		["1998-09-17T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Asia/Gaza", [
		["1999-04-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["1999-04-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1999-10-14T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1999-10-14T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Asia/Gaza", [
		["2000-04-20T21:59:59+00:00", "23:59:59", "EET", -120],
		["2000-04-20T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2000-10-19T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2000-10-19T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Asia/Gaza", [
		["2001-04-19T21:59:59+00:00", "23:59:59", "EET", -120],
		["2001-04-19T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2001-10-18T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2001-10-18T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Asia/Gaza", [
		["2002-04-18T21:59:59+00:00", "23:59:59", "EET", -120],
		["2002-04-18T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2002-10-17T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2002-10-17T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Asia/Gaza", [
		["2003-04-17T21:59:59+00:00", "23:59:59", "EET", -120],
		["2003-04-17T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2003-10-16T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2003-10-16T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Asia/Gaza", [
		["2004-04-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["2004-04-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2004-09-30T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2004-09-30T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Asia/Gaza", [
		["2005-04-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["2005-04-14T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2005-10-03T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2005-10-03T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Asia/Gaza", [
		["2006-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["2006-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2006-09-21T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2006-09-21T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Asia/Gaza", [
		["2007-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["2007-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2007-09-12T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2007-09-12T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Asia/Gaza", [
		["2008-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2008-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2008-08-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2008-08-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Asia/Gaza", [
		["2009-03-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2009-03-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2009-09-03T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2009-09-03T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Asia/Gaza", [
		["2010-03-26T22:00:59+00:00", "00:00:59", "EET", -120],
		["2010-03-26T22:01:00+00:00", "01:01:00", "EEST", -180],
		["2010-08-10T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2010-08-10T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Asia/Gaza", [
		["2011-03-31T22:00:59+00:00", "00:00:59", "EET", -120],
		["2011-03-31T22:01:00+00:00", "01:01:00", "EEST", -180],
		["2011-07-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2011-07-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Asia/Gaza", [
		["2012-03-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2012-03-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2012-09-20T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2012-09-20T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2013" : helpers.makeTestYear("Asia/Gaza", [
		["2013-03-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2013-03-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2013-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2013-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Asia/Gaza", [
		["2014-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2014-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2014-10-23T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2014-10-23T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2015" : helpers.makeTestYear("Asia/Gaza", [
		["2015-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2015-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2015-10-22T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2015-10-22T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2016" : helpers.makeTestYear("Asia/Gaza", [
		["2016-03-25T22:59:59+00:00", "00:59:59", "EET", -120],
		["2016-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2016-10-28T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2016-10-28T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2017" : helpers.makeTestYear("Asia/Gaza", [
		["2017-03-24T22:59:59+00:00", "00:59:59", "EET", -120],
		["2017-03-24T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2017-10-27T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2017-10-27T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2018" : helpers.makeTestYear("Asia/Gaza", [
		["2018-03-23T22:59:59+00:00", "00:59:59", "EET", -120],
		["2018-03-23T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2018-10-26T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2018-10-26T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2019" : helpers.makeTestYear("Asia/Gaza", [
		["2019-03-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2019-03-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2019-10-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2019-10-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2020" : helpers.makeTestYear("Asia/Gaza", [
		["2020-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2020-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2020-10-23T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2020-10-23T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2021" : helpers.makeTestYear("Asia/Gaza", [
		["2021-03-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2021-03-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2021-10-29T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2021-10-29T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2022" : helpers.makeTestYear("Asia/Gaza", [
		["2022-03-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2022-03-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2022-10-28T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2022-10-28T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2023" : helpers.makeTestYear("Asia/Gaza", [
		["2023-03-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2023-03-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2023-10-27T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2023-10-27T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2024" : helpers.makeTestYear("Asia/Gaza", [
		["2024-03-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2024-03-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2024-10-25T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2024-10-25T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2025" : helpers.makeTestYear("Asia/Gaza", [
		["2025-03-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2025-03-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2025-10-24T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2025-10-24T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2026" : helpers.makeTestYear("Asia/Gaza", [
		["2026-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2026-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2026-10-23T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2026-10-23T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2027" : helpers.makeTestYear("Asia/Gaza", [
		["2027-03-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2027-03-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2027-10-29T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2027-10-29T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2028" : helpers.makeTestYear("Asia/Gaza", [
		["2028-03-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2028-03-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2028-10-27T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2028-10-27T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2029" : helpers.makeTestYear("Asia/Gaza", [
		["2029-03-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2029-03-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2029-10-26T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2029-10-26T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2030" : helpers.makeTestYear("Asia/Gaza", [
		["2030-03-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2030-03-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2030-10-25T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2030-10-25T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2031" : helpers.makeTestYear("Asia/Gaza", [
		["2031-03-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2031-03-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2031-10-24T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2031-10-24T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2032" : helpers.makeTestYear("Asia/Gaza", [
		["2032-03-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2032-03-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2032-10-29T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2032-10-29T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2033" : helpers.makeTestYear("Asia/Gaza", [
		["2033-03-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2033-03-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2033-10-28T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2033-10-28T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2034" : helpers.makeTestYear("Asia/Gaza", [
		["2034-03-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2034-03-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2034-10-27T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2034-10-27T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2035" : helpers.makeTestYear("Asia/Gaza", [
		["2035-03-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2035-03-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2035-10-26T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2035-10-26T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2036" : helpers.makeTestYear("Asia/Gaza", [
		["2036-03-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2036-03-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2036-10-24T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2036-10-24T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2037" : helpers.makeTestYear("Asia/Gaza", [
		["2037-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2037-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2037-10-23T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2037-10-23T22:00:00+00:00", "00:00:00", "EET", -120]
	])
};