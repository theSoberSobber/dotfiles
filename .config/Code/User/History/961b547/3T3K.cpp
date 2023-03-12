#include <bits/stdc++.h>
#ifndef ONLINE_JUDGE
#include "debug.h"
#pragma GCC optimize("O3,unroll-loops")
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt")
#else
#define dbg(x...) "11-111"
#endif

using namespace std;

#define ll long long
#define int long long // because mai bevakoof hu
#define logCont(arr,f,l)   { auto start=arr.begin(), end=arr.begin(); advance(start,(f)); advance(end,(l)); for(auto it=start; it!=end; it++) cout<<*it<<" "; cout<<"\n"; }
#define uniq(x) x.erase(unique(all(x)),x.end());
#define tr(s, args...) transform(s.begin(), s.end(), args)
#define sz(x) (ll)x.size()

// variadic lambda
#define f(u, args...)     [&](auto &&u) { return args; }
#define g(u, v, args...)  [&](auto &&u, auto &&v) { return args; }

// precesion
#define precise(n)        cout<<fixed<<setprecision((n))
// bits
#define bpc(n)            std::popcount((unsigned long long)(n))
#define hsb(n)            std::has_single_bit((unsigned long long)(n))
#define MSB(n)            std::bit_floor((unsigned long long)(n))
#define ctz(n)            ((n) ? __builtin_ctzll((unsigned long long)(n)) : 0)
#define clz(n)            ((n) ? __builtin_clzll((unsigned long long)(n)) : 64)
#define LSB(n)            ((n)&(-(n)))

// general amax, amin for any ds, to be able to use swap in graphs and stuff
template<typename T,typename T1> inline bool amax(T &a,T1 b){ if(b>a) { a=b; return true; } return false; }
template<typename T,typename T1> inline bool amin(T &a,T1 b){ if(b<a) { a=b; return true; } return false; }

// comparison struct for maps (or use decltype)
template<typename T> struct Comp { bool operator()(const T& l, const T& r) const { return l < r; } };

constexpr ll Inf = 4e18;
constexpr int mod = 1e9+7;
// constexpr int mod = 998244353;
constexpr int maxn = 1e6+5;

// sasta mint
ll inv(ll i) {if (i == 1) return 1; return (mod - ((mod / i) * inv(mod % i)) % mod) % mod;}
ll mod_mul(ll a, ll b) {a = a % mod; b = b % mod; return (((a * b) % mod) + mod) % mod;}
ll mod_add(ll a, ll b) {a = a % mod; b = b % mod; return (((a + b) % mod) + mod) % mod;}
ll gcd(ll a, ll b) { if (b == 0) return a; return gcd(b, a % b);}
ll ceil_div(ll a, ll b) {return a % b == 0 ? a / b : a / b + 1;}
ll pwr(ll a, ll b) {a %= mod; ll res = 1; while (b > 0) {if (b & 1) res = res * a % mod; a = a * a % mod; b >>= 1;} return res;}

// pows
inline ll po(ll a, ll b) { ll res = 1; for (; b; b >>= 1) { if (b & 1)res = res * a; a = a * a; }return res; }
inline ll modpow(ll a, ll b, ll mod) { ll res = 1; for (; b; b >>= 1) { if (b & 1)res = (res * a)%mod; a = (a * a)%mod; }return res; }

void pre_process(){
    int n; cin>>n;
    vector<int> a(n+1, 0);
    vector<int> ex(n+1,-1);
    for(int i=1;i<=n;i++){
        cin>>a[i];
        if(a[i])
    }

}

int solve(){
    int n; cin>>n;
    dbg(n);
    return 2*n; 
}
int32_t main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    pre_process();
    int t; cin>>t;
    while(t--) cout<<solve()<<'\n';
}