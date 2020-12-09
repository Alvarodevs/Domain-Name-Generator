var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domain = ['.com', '.de'];

function allDomains (pronoun, adj, noun, domain){

    var result = [];

    for (i = 0; i < pronoun.length; i++){

        for (h = 0; h < adj.length; h++){

            for (j = 0; j < noun.length; j++){

                for (l = 0; l < domain.length; l++){
                    result.push(pronoun[i] + adj[h] + noun[j] + domain[l]);}
            }
        }
    }
    // return result.push(pronoun[i] + adj[h] + noun[j] + domain[l]);
    return result;
}
console.log(allDomains(pronoun, adj, noun, domain));

