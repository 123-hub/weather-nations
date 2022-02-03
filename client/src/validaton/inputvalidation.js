

function inputvalidation(cityvalue) {
    if (cityvalue == "") {

        
        return false;
    }
    if (!/[^0-9]/g.test(cityvalue)) {
        
        
        return false;
    }
    else
    return true;
}

export default inputvalidation
