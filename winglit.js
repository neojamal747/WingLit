$ ("#formSubmitButton").on("click",function(event){
	event.preventDefault();
	console.log("submit button click")
})

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'cache_fname = "cached_results.txt"'+nl+nl+
	'try:'+nl+
	'    fobj = open(cache_fname, \'rb\')'+nl+
	'    saved_cache = pickle.load(fobj)'+nl+
	'    fobj.close()'+nl+
	'except:'+nl+
	'    raise Exception("Make sure you have cached_results.txt in the same directory as this code file.")'+nl+
	'    #saved_cache = {}'+nl+nl+
	'def requestURL(baseurl, params = {}):'+nl+
	'    """'+nl+
	'    Returns the full URL for the request.'+nl+
	'    :param baseurl: REST API root url'+nl+
	'    :param params: Parameters dictionary for REST API'+nl+
	'    :return: Returns the base url and parameters formatted as a REST API request'+nl+
	'    """'+nl+
	'    req = requests.Request(method = \'GET\', url = baseurl, params = params)'+nl+
	'    prepped = req.prepare()'+nl+
	'    return prepped.url'+nl+nl+
	'def get_with_caching(base_url, params_diction, cache_diction, cache_fname):'

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'full_url = requestURL(base_url, params_diction)'+nl+
	'    if full_url in cache_diction:'+nl+
	'        return cache_diction[full_url]'+nl+
	'    else:'+nl+
	'        response = requests.get(base_url, params=params_diction)'+nl+
	'        cache_diction[full_url] = response.text'+nl+
	'        fobj = open(cache_fname, "wb")'+nl+
	'        pickle.dump(cache_diction, fobj)'+nl+
	'        fobj.close()'+nl+
	'        return response.text'

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'def GetTSAWaitTimes(airportCode):'+nl+
	'    base_url = "http://apps.tsa.dhs.gov/MyTSAWebService/GetTSOWaitTimes.ashx"'+nl+
	'    params_tsa_d = {}'+nl+
	'    params_tsa_d[\'ap\'] = airportCode'+nl+
	'    params_tsa_d[\'output\'] = \'json\''+nl+
	'    try:'+nl+
	'        results_tsa = requests.get(base_url, params=params_tsa_d)'+nl+
	'        tsa_result_diction = json.loads(results_tsa.text)'+nl+nl+
	'    except Exception, e:'+nl+
	'        print "Error: Unable to load TSA wait times. Please try again."'+nl+
	'        quit()'+nl+
	'    return tsa_result_diction'

document.write(pagecode);


var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'except Exception, e:'+nl+
	'        print "Error: Unable to load TSA wait times. Please try again."'+nl+
	'        quit()'+nl+
	'    return tsa_result_diction'+nl+nl+
	'def GetTSAMetadata():'+nl+
	'    airport_fname = "apcp.xml"'+nl+
	'    try:'+nl+
	'        airportTree = ET.parse(airport_fname)'+nl+
	'    except Exception, e:'+nl+
	'        print "Error: The TSA Airport metadata file apcp.xml could not be found in the program directory. Please upload and try again."'+nl+
	'        quit()'+nl+
	'    return airportTree'+nl+nl+
	'def GetDistance(origin, airportCode, key, units="imperial"):'+nl+
	'    base_url = "https://maps.googleapis.com/maps/api/distancematrix/json"'+nl+
	'    params_google_d = {}'+nl+
	'    params_google_d[\'units\'] = units'+nl+
	'    params_google_d[\'origins\'] = origin'+nl+
	'    params_google_d[\'destinations\'] = airportCode'+nl+
	'    params_google_d[\'key\'] = key'+nl+
	'    try:'+nl+
	'        results_google = requests.get(base_url, params=params_google_d)'+nl+
	'        google_result_diction = json.loads(results_google.text)'+nl+
	''

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'def LoadTSAMetadata():'+nl+
	'    TSAairportTree = GetTSAMetadata()'+nl+
	'    TSAairportRoot = TSAairportTree.getroot()'+nl+
	'    TSAairportDict = {}'+nl+
	'    for airport in TSAairportRoot:'+nl+
	'        airportDict = TSAAirport(airport)'+nl+
	'        TSAairportDict[airportDict.shortcode] = airportDict'+nl+
	'    return TSAairportDict'+nl+nl+
	'class TSAAirport:'+nl+
	'   '+nl+
	'    def __init__(self, airport):'+nl+
	'        self.name = airport.find(\'name\').text'+nl+
	'        self.shortcode = airport.find(\'shortcode\').text'+nl+
	'        self.city = airport.find(\'city\').text'+nl+
	'        self.state = airport.find(\'state\').text'+nl+
	'        self.latitude = airport.find(\'latitude\').text'+nl+
	'        self.longitude = airport.find(\'longitude\').text'+nl+
	'        self.utc = airport.find(\'utc\').text'+nl+
	'        self.dst = airport.find(\'dst\').text'+nl+
	'        self.precheck = airport.find(\'precheck\').text'+nl+
	'        self.checkpoints = []'+nl+
	'        tmpCheckpoints = airport.find(\'checkpoints\')'+nl+
	'        for checkpoint in tmpCheckpoints.findall(\'checkpoint\'):'+nl+
	'            checkpointDict = {}'+nl+
	'            checkpointDict["id"] = checkpoint.find(\'id\').text'+nl+
	'            checkpointDict["longname"] = checkpoint.find(\'longname\').text'+nl+
	'            checkpointDict["shortname"] = checkpoint.find(\'shortname\').text'+nl+
	'            self.checkpoints.append(checkpointDict)'+nl+nl+
	'    def hasTSAPrecheck(self):'+nl+
	''

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'class TSAWaitTimes:'+nl+
	'   '+nl+
	'    def __init__(self, airportCode, TSAairportDict):'+nl+
	'        TSAdump = GetTSAWaitTimes(airportCode)'+nl+
	'        self.airportCode = airportCode'+nl+
	'        self.AllWaitTimes = TSAdump'+nl+
	'        self.CheckpointWaitTimes = TSAairportDict[airportCode].checkpoints'+nl+
	'        self.TSAairportDict = TSAairportDict'+nl+nl+
	'        for checkpoint in self.CheckpointWaitTimes:'+nl+
	'            checkpoint["WaitTimes"] = [waitTime for waitTime in self.AllWaitTimes["WaitTimes"] if waitTime["CheckpointIndex"] == checkpoint["id"]]'+nl+nl+
	'    def AllCheckpointWaitTimes(self):'+nl+
	'        '+nl+
	'        return self.CheckpointWaitTimes'+nl+nl+
	'    def OneCheckpointWaitTimes(self, chk):'+nl+
	'       '+nl+
	'        return self.CheckpointWaitTimes[chk-1]'+nl+nl+
	'    def AvgAllWaitTime(self, rng=5):'+nl+
	'       '+nl+
	'        tot = 0'+nl+
	'        for num in range(rng):'+nl+
	'            tot += int(self.AllWaitTimes["WaitTimes"][num]["WaitTime"])'+nl+
	'        newTot = math.ceil(tot / float(rng)) * 600'+nl+
	'        return int(newTot)'+nl+nl+
	'    def WorstWaitTime(self):'+nl+
	''

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '        unsortedList = {}'+nl+
	'        for x in self.AllWaitTimes["WaitTimes"]:'+nl+
	'            unsortedList[x["Created_Datetime"]] = x["WaitTime"]'+nl+
	'        tmpList = unsortedList.items()'+nl+
	'        sortList = sorted(tmpList, key=lambda k: k[1], reverse=True)'+nl+
	'        return (sortList[0][0], int(sortList[0][1]) * 600)'+nl+nl+
	'    def AvgOneWaitTime(self, chk, rng=5):'+nl+nl+
	'        Checks the newest wait time for each checkpoint and provides the slowest one.'+nl+
	'        :param rng: The number of Wait Time records to take into account, starting from the newest. Defaults to last 5 wait times.'+nl+
	'        :return: Returns slowest current wait time in seconds.'+nl+nl+
	'    Combines TSA Airport metadata data with TSA wait times'+nl+nl+
	'    Used to create instances of trip distances from origin address to airport with Google Distance Matrix API.'

document.write(pagecode);


var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'Creates a master class of the trip, including airport, security wait times, and distance with traffic data'

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'Requests trip variables from user.'+nl+
	'    :return: Returns user responses (destination shortcode, departure address, has TSA precheck, international flight, checkedBags, returning a rentalCar)'

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '  Calculates the total buffer based on user responses.'+nl+
	'    :param trip_precheck: If the user has TSA Precheck'+nl+
	'    :param trip_international: If it\'s an international flight (otherwise, assume domestic)'+nl+
	'    :param trip_checkedBags: If the user will be checking in bags'+nl+
	'    :param trip_rentalCar: If the user will be returning a rental car'+nl+
	'    :return: Return total trip buffer in seconds (time to allow besides trip time and security checkpoint delays)'

document.write(pagecode);

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'Central program loop.'+nl+
	'    :return: end of program'

document.write(pagecode);
f
</script>