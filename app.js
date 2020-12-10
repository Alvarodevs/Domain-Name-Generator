var pronoun = ['the','our'];
var adj = ['great', 'big'];
var noun = ['jogger','racoon', 'poderio', 'code'];
var domain = ['.com', '.de', '.io'];

function allDomains (pronoun, adj, noun, domain){

    var result = [];

    for (i = 0; i < pronoun.length; i++){

        for (h = 0; h < adj.length; h++){

            for (j = 0; j < noun.length; j++){

                for (l = 0; l < domain.length; l++){

                    let newNoun = noun[j];

                    let noDotDomain = domain[l].slice(1,domain[l].length);

                    if (noun[j].endsWith(noDotDomain)) {

                        //console.log("funciona",noun[j].replace(domain[l].slice(1,domain[l].length)," "))
                        
                        newNoun = noun[j].replace(noDotDomain,"");

                        result.push(pronoun[i] + adj[h] + newNoun + domain[l])
                    }
                    else {result.push(pronoun[i] + adj[h] + noun[j] + domain[l]);}
                }
            }
        }
    }
    return result;
}
console.log(allDomains(pronoun, adj, noun, domain));