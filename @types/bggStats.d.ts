export namespace BggStats {
  export interface  {
    groups: GroupElement[];
    userInfo: UserInfo;
    players: Player[];
    locations: Location[];
    games: Game[];
    plays: Play[];
    tags: Tag[];
    challenges: Challenge[];
  }

  export interface Challenge {
    uuid: string;
    hardCore: boolean;
    metaData: string;
    games: ChallengeGame[];
    modificationDate: Date;
    completed: boolean;
    endDate: Date;
    autoFill: boolean;
    type: number;
    playerUuids: string;
    excludedPlayUuids?: string;
    value2: number;
    startDate: Date;
    name: string;
    value1: number;
  }

  export interface ChallengeGame {
    gameRefId: number;
    dontInclude: boolean;
  }

  export interface Game {
    highestWins: boolean;
    urlThumb: string;
    minPlayTime: number;
    copies: Copy[];
    usesTeams: boolean;
    bggName: string;
    minPlayerCount: number;
    bggYear: number;
    uuid: string;
    noPoints: boolean;
    name: string;
    modificationDate: Date;
    id: number;
    cooperative: boolean;
    maxPlayTime: number;
    preferredImage: number;
    urlImage: string;
    isBaseGame: number;
    maxPlayerCount: number;
    bggId: number;
    minAge: number;
    designers: string;
    rating: number;
    isExpansion: number;
    metaData?: string;
  }

  export interface Copy {
    uuid: string;
    gameName?: string;
    metaData: string;
    wishlistStatus: number;
    statusWantToBuy?: number;
    modificationDate: Date;
    bggCollId: number;
    versionName?: string;
    bggVersionId: number;
    year: number;
    urlImage?: string;
    bggUserName: string;
    statusOwned?: number;
    statusWishlist?: number;
    statusPreordered?: number;
    urlThumb?: string;
    statusPrevOwned?: number;
    statusWantToPlay?: number;
    statusWantInTrade?: number;
    statusForTrade?: number;
  }

  export interface GroupElement {
    modificationDate: Date;
    metaData?: string;
    uuid: string;
    isDefault: boolean;
    isInternal: boolean;
    type: string;
    name: string;
  }

  export interface Location {
    id: number;
    modificationDate: Date;
    tags?: LocationTag[];
    name: string;
    uuid: string;
  }

  export interface LocationTag {
    tagRefId: number;
  }

  export interface Player {
    id: number;
    isAnonymous: boolean;
    modificationDate: Date;
    name: string;
    uuid: string;
    bggUsername?: string;
  }

  export interface Play {
    nemestatsId: number;
    playerScores: PlayerScore[];
    expansionPlays: ExpansionPlay[];
    importPlayId: number;
    usesTeams: boolean;
    scoringSetting: number;
    durationMin: number;
    manualWinner: boolean;
    playDate: Date;
    playImages: string;
    uuid: string;
    modificationDate: Date;
    rounds: number;
    entryDate: Date;
    locationRefId: number;
    bggLastSync: Date;
    bggId: number;
    board?: string;
    gameRefId: number;
    ignored: boolean;
    rating: number;
    metaData?: string;
    comments?: string;
  }

  export interface ExpansionPlay {
    bggId: number;
    gameRefId: number;
  }

  export interface PlayerScore {
    winner: boolean;
    seatOrder: number;
    score: string;
    startPlayer: boolean;
    playerRefId: number;
    rank: number;
    team?: string;
    newPlayer: boolean;
    startPosition?: string;
    role?: string;
    teamRole?: string;
  }

  export interface Tag {
    isHidden: boolean;
    id: number;
    modificationDate: Date;
    uuid: string;
    isDefault: boolean;
    group: string;
    isInternal: boolean;
    name: string;
    type: TagType;
  }

  export enum TagType {
    Location = "Location",
  }

  export interface UserInfo {
    meRefId: number;
    cloudEmail: string;
    bggUsername: string;
  }
}
