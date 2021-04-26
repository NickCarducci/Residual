import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginTop: 200
      //marginTop: window.innerWidth * (window.innerHeight / window.innerWidth)
    };
    this.header = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    this.resize();
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };
  resize = () => {
    this.setState({
      marginTop: this.header.current.offsetHeight
    });
  };
  render() {
    const { marginTop } = this.state;
    return (
      <div
        style={{
          wordBreak: "break-word",
          width: "100%"
        }}
      >
        <div
          ref={this.header}
          style={{
            textAlign: "right",
            width: "100%",
            top: "0px",
            position: "fixed",
            right: "0px",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            lightte.ch
          </a>
        </div>
        <div
          style={{
            transition: ".3s ease-in",
            margin: "10px",
            marginTop: marginTop,
            width: "calc(100% - 20px)",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          <TwitterTweetEmbed
            key={"1386654198868099073"}
            tweetId={"1386654198868099073"}
          />
          A complete-safeguard is a convict-intranet and on-device keybox.
          Police/kidAdoptParent dash (with allowance to bluff)
          <br />
          <br />
          froth.app @frothanalysis · 14m
          <br />
          Replying to @viathumbprint
          <br />
          @FEC and @uscourts Oh you can bet I’ll apprisal your ass
          <br />
          <br />
          <div style={{ backgroundColor: "rgb(240,220,170)" }}>
            Why are you conflating voluntary-charity and disbursements @fec
            @uscourts #GuamVUS? There is no protection of laundering funds
            nick@Thumbprint.us - Social Calendar & more! @viathumbprint · 59m
            <br />
            <br />
            You want to take actions of presumptions? This is the Supreme Court?
            heat rises - Vaults - 30under5.us magnate.company @vaultbiz Replying
            to @viathumbprint Donations are not organizational rights 10:50 AM ·
            Apr 26, 2021·Twitter for iPhone View Tweet activity community
            explorer @thumbprintapp · 44m
            <br />
            <br />
            Replying to @vaultbiz and @viathumbprint Donations are not purchases
            froth.app @frothanalysis · 38m
            <br />
            <br />
            Creating a barrier-to-entry to boot, of no-less with intent. Unions
            can strike. Deposits aren’t options. Credit is not cash.
            Free-rider-immutable-tax is not theft. Yadda yadda yadda
            moldmask.co, cocaine is money, purity health dpt @SaverParty · 21m
            <br />
            <br />
            And a purchase is not&nbsp;
            <a href="https://micro-theory.com">always</a>&nbsp;either a wage or
            aftermarket, but it is certainly not a )))
            <a href="https://froth.app/debt">promise</a>(((
          </div>
          <br />
          First they increase my parent’s banksquat home value $600k since 2008
          then tax the property-improvement @uscourts @bernieandsid
          #CapitalGainsTax https://30under5.us https://debtistheft.com
          <br />
          <br />
          If there is any deal, without a court-verifiable logistical-proof of
          free-rider-immutability (Apple NC, Amazon NYC) nor debtlessness, it is
          not a “competitive-bidding-process” #DebtIsHaram @FTC @USEEOC @FCC
          @PressSec heat rises - Vaults - 30under5.us magnate.company @vaultbiz
          · 1h
          <br />
          A job before customers is not a job per labor-equity;
          free-rider-mutable taxation by usury, counterfeit or cash-depositary
          is still not a new job
          <br />
          <br />
          "System of itself can not administer itself" - D&S @DiamondandSilk
          wew!
          <br />
          <br />
          Money donated on people’s names to fund riots, GOP says to run them
          over
          <br />
          <br />
          by definition an admin is merely a player. http://lightte.ch
          <div style={{ backgroundColor: "rgb(220,180,250)" }}>
            moldmask.co, cocaine is money, purity health dpt @SaverParty · 49m
            <br />
            First they increase my parent’s banksquat home&nbsp;
            <a href="https://30under5.us">value</a>&nbsp;$600k since 2008 then
            tax the property-improvement @uscourts @bernieandsid
            #CapitalGainsTax https://debtistheft.com
            <br />
            <br />
            nick@Thumbprint.us - Social Calendar & more! @viathumbprint · 13m
            <br />
            If there is any deal, without a court-verifiable logistical-proof of
            free-rider-immutability (Apple NC, Amazon NYC) nor debtlessness, it
            is not a “competitive-bidding-process” #DebtIsHaram @FTC @USEEOC
            @FCC @PressSec
            <br />
            <br />
            heat rises - Vaults - 30under5.us magnate.company @vaultbiz · 9m
            <br />A job before customers is not a job per labor-equity;
            free-rider-mutable taxation by usury, counterfeit or cash-depositary
            is still not a new job
          </div>
          <br />
          <div style={{ backgroundColor: "rgb(180,250,220)" }}>
            FDA determined the lymphoma during Moderna test was not caused by
            Moderna from their report
            <br />
            <br />
            If most are fat, old, afro or Hispanic and 80% effectiveness to
            boot. I can withhold people based on that correlation and not on
            subjective minimal viable product
            <br />
            <br />
            50% worsened lymphoma obviously. J&J not advertised as being
            cultured with stem cells. Cells without an antigen is a tumor
            <br />
            <br />
            B-cell creativity can grow dependent. Charles Darwin observed that
            @CDCDirector
            <br />
            <br />
            The right is not from Civil Rights it is free-rider-excluder
            enslaving those denied not based on mvp, of as evidenced as a
            cease-and-desist defamation order would require. Here, you must
            prove condensation does not happen @uscourts @neiltyson
            <br />
            <br />
            The virus comes from within
            <br />
            <br />
            The pores @JohnsHopkinsSPH @StephenMoore : "They know they can lose
            all their money when they go into it," but extend the terms? trade
            is settled
          </div>
          <br />
          @Partnership4NYC http://30under5.us I’ve been saying this for years...
          http://lightte.ch http://3under2.us
          <br />
          <br />
          Less taxes (towards 3under2.us 3%under2k and not
          property-improvement-tax or involuntary-servitude on usurped grounds
          nationalsecuritycasino.com) is good because marginal propensity to
          consume produces more comparatively-advantages trades found
          <br />
          <br />
          “It is difficult to turn on-and-off plants” Jim Hansel, Indian-Point
          Powerplant. Well http://magnate.company fixes that bastard
          <hr />
          <br />
          Poverty will never be removed until technology is full and there are
          no jobs
          <br />
          <br />
          Monopsony is Suypply as intermediate-demand
          <br />
          <br />
          Marxism is the same as Mises about credit is counterfeit and duress is
          voidable. court-of-law doesn't exist if justice would lessen their pay
          <br />
          <br />
          growth is communism, marx is individual without human assets
          <br />
          <br />
          I&nbsp;
          <a href="https://johnshopkins.academia.edu/NickCarducci">present</a>
          &nbsp;Marx/Schumpeter/Piketty as the same as Mises, without the
          rent-seeking/prisoner-dilemma-apathy. Marx wanted labor to have
          profits, which is essentially non-profits (unlimited salaries
          notwithstanding... lightte.ch). This is misnomer, like Jesus never
          said he would die for Sin.
          <br />
          <br />
          Maoism is quota-communism (basic) and I’m didn’t study how Lenin went
          from serfdom to genocide but residualsplit.us is like castle doctrine
          haram. The market cannot solve prisoners’ dilemma
          <br />
          <br />
          Deterministic-calculus = notation of units by causal effect & if
          partial derivatives are greater than one it is two-full-derivatives
          (or to boot, doubly)
          <br />
          <br />
          Red-herring is of the unobserved but is 0
          <br />
          <br />
          <a href="https://vianickcarducci.medium.com/gdp-the-big-lie-b1a0868785f4">
            GDP= C + P
          </a>
          &nbsp;is laughable in this regard. As well as significance not being
          elastic or exponentially-correlated (positively or negatively) to
          shuffling or non-derivative sample-population. Or pooling/
          free-rider-mutable-tax/<b style={{ color: "blue" }}>usury</b>
          &nbsp;saves money from price-elasticity not being a fact. Or
          condensation not being a fact and spit-derived-humidity locked in mask
          doesn't elongate virus-half-life instead of condensate without even a
          test on countertop after speaking
          <br />
          <br />
          Mind your business, Joe Manchin
          <br />
          <br />
          "M2-Money supply is enlargening, and that is very, very good" - Former
          US Economic Advisor. "If it ain't broke don't fix it!" more jobs
          doesn't lead to less poverty unless there is depreciating technology
          Gov Patterson...
          <h1>residualsplit.us</h1>
          <h1>residual-split</h1>
          @abbydphillip, "Stimulus" doesn’t work for people it is&nbsp;
          <b>residual-split</b>
          ...
          <br />
          <br />
          "They know they can lose all their money when they go into it,"
          but&nbsp;
          <b style={{ color: "blue" }}>extend the terms</b>?&nbsp;
          <b>trade is settled</b>
          <br />
          <br />
          It is also bail-out for usurped debt when credit wasn’t yet
          counterfeit
          <br />
          <br />
          Taxes-over-$400k for&nbsp;
          <b>
            <a href="https://lightte.ch">free-rider-mutable</a>
            &nbsp;labor*assets*resources is monopsony
          </b>{" "}
          for merely a higher-price (damage) than allowing to negotiate without
          invoices or prisoners' dilemma duress. You can turn off&nbsp;
          <a href="https://vaults.biz">water&electricity</a>
          &nbsp;&&nbsp;<a href="https://3under2.us">have tolls...</a>
          &nbsp;individually. I’m not jealous of the government, I am concerned
          for public-health #MinnesotaIsGuilty #ChauvinTrial @chase
          @MoodysInvSvc #CarFace
          <br />
          <br />
          It is not in spite, salvation is irrelevant of population and the past
          is past the only action of children of G—d is to prohibit future
          actions without guilt assumed and with outmost investigations of
          intent
          <br />
          <br />
          People do drugs because finance is depressing and school doesn’t pay
          <br />
          <br />
          Discrimination based on not politics (campaign for office,
          poll-extrapolation, party-analysis) or even ideas, but skill or bid
          sofarastowards call a deposit not an option-to-buy
          <br />
          <br />
          Dick Morris: “As we allow Intuit to dissolve, we need&nbsp;
          <a href="https://2052.live">UBI</a>”
          <br />
          <br />I was going to say, “you’re a breathe of fresh air, so I am
          surprised to learn again you advice @BillClinton . UBI is not needed
          since prices are elastic, moreover it is nationalistic bail-out. Did
          you advise Bill Clinton on Glass Steagal repeal of dubbing
          bond-valuation as ...
          <br />
          <br />
          savings of real assets? Financial employment to population is 2% and
          own 4400% of real-assets” @DickMorrisTweet
          <br />
          <br />
          Not only is it annoying but it shows intent and is not productive in
          the measure of ease-of-life or
          accumulative-hours-worked/median-home-sale-price
          <br />
          <br />
          Are you happier with Government and Finance that you would turn down
          $300k in bonds and $70k in cash, every year?
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
              <img
                style={{ width: "100%", height: "auto" }}
                alt="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp"
                src="https://www.dl.dropboxusercontent.com/s/txga730d36r52tg/Screen%20Shot%202021-04-25%20at%209.16.44%20AM.png?dl=0"
              />
            </a>
          </div>
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <a href="ttps://fred.stlouisfed.org/graph/?g=D2jW">
              <img
                style={{ width: "100%", height: "auto" }}
                alt="$300k per person a year promised out of no-where, $70k per person a year given to gov monopsony contractors for free-rider-mutables beyond free-rider-immutables"
                src="https://www.dl.dropboxusercontent.com/s/r500t29a6058oll/Screen%20Shot%202021-04-11%20at%206.53.30%20AM.png?dl=0"
              />
            </a>
          </div>
          This is M2; $300k per person a year promised out of no-where, $70k per
          person a year given to gov monopsony contractors for
          free-rider-mutables beyond free-rider-immutables.&nbsp;
          <a href="https://foiegras.life">Bloated demand</a>&nbsp;for
          free-rider-mutables<b>&nbsp;does not create jobs</b>
          <iframe
            style={{ width: "100%", height: "700px" }}
            title="2% of the population owns 4400% of the assets"
            src="https://froth.app"
          />
        </div>
      </div>
    );
  }
}
