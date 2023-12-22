const BASE_URL = 'https://api.trapi.dev/';

class PlayerData {
    constructor(apiKey = '') {
        this.apiKey = apiKey;
    }

    async getPlayer(playerName) {
        try {
            const response = await fetch(`${BASE_URL}/v1/player/${playerName}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getPlayerStatus(playerUuid) {
        try {
            const response = await fetch(`${BASE_URL}/v1/status/${playerUuid}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getGuild(guildName) {
        try {
            const response = await fetch(`${BASE_URL}/v1/guild/${guildName}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getRecentGames(uuid) {
        try {
            const response = await fetch(`${BASE_URL}/v1/recentgames/${uuid}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }
}

class Resources {
    constructor(apiKey = '') {
        this.apiKey = apiKey;
    }

    async getGames() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/games/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getAchievements() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/achievements/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getChallenges() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/challenges/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getQuests() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/quests/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getGuildsAchievements() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/guilds/achievements/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getVanityPets() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/vanity/pets/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getVanityCompanions() {
        try {
            const response = await fetch(`${BASE_URL}/v1/resources/vanity/companions/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }
}

class Skyblock {
    constructor(apiKey = '') {
        this.apiKey = apiKey;
    }

    async getCollections() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/collections?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getSkills() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/skills?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getElection() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/election?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getAuction(type = 'uuid', uuid = null, player = null, profile = null) {
        try {
            let response;

            if (type === 'uuid') {
                response = await fetch(`${BASE_URL}/v1/skyblock/auction/${type}/${uuid}?api_key=${this.apiKey}`);
            } else if (type === 'player') {
                response = await fetch(`${BASE_URL}/v1/skyblock/auction/${type}/${player}?api_key=${this.apiKey}`);
            } else if (type === 'profile') {
                response = await fetch(`${BASE_URL}/v1/skyblock/auction/${type}/${profile}?api_key=${this.apiKey}`);
            } else {
                console.error("The type has to be <UUID/PLAYER/PROFILE>!");
                return null;
            }

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getAuctions() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/auctions?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getAuctionsEnded() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/auctions_ended?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getBazaar() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/bazaar?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getProfile(profile = null) {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/profile/${profile}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getProfiles(uuid = null) {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/profiles/${uuid}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getMuseum(profile = null) {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/museum/${profile}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getBingo(uuid = null) {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/bingo/${uuid}?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }

    async getFireSales() {
        try {
            const response = await fetch(`${BASE_URL}/v1/skyblock/firesales/?api_key=${this.apiKey}`);

            if (response.ok) {
                return await response.text();
            } else {
                console.error(`Error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
            return null;
        }
    }
}