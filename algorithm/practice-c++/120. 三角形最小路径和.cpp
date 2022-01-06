// https://leetcode-cn.com/problems/triangle/

// ! 重要, dp问题的经典题
// ! 递推 | 动态规划 
// ! 
// ! 解题步骤:
// ! 1、确定递推状态
// ! 2、确定递推公式 | 动态转移方程
// ! 3、确定递推边界
// ! 
// ! 重要概念:
// ! 1、阶段: 当前阶段依赖上一个阶段
// ! 2、状态: 一个阶段中可能包含若干状态
// ! 3、决策: 在所有可转移的状态中选择最优解
// ! 4、转移: 从一个状态转移到另一个状态的过程
// ! 5、通过对状态的定义, 我们确定了动态转移方程
// ! 在这个过程中对于状态的定义尤为重要, 通过不同的状态定义, 我们得出了不同的动态转移方程
// ! 和我们递推的边界, 进而影响到我们的程序实现, 也就决定了我们代码实现的难易程度和出错概率.

// 1、自顶向下
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        int dp[n][n];
        dp[0][0] = triangle[0][0];
        for (int i = 1; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                dp[i][j] = INT_MAX;
                if (j <= i - 1) dp[i][j] = min(dp[i][j], dp[i - 1][j] + triangle[i][j]);
                if (j > 0) dp[i][j] = min(dp[i][j], dp[i - 1][j - 1] + triangle[i][j]);
            }
        }
        int ans = INT_MAX;
        for (int i = 0; i < n; i++) {
            ans = min(ans, dp[n - 1][i]);
        }
        return ans;
    }
};

// 2、自底向上
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        int dp[n][n];
        memset(dp, 0, sizeof(dp));
        for (int i = 0; i < n; i++) dp[n - 1][i] = triangle[n - 1][i];
        for (int i = n - 2; i >= 0; --i) {
            for (int j = 0; j <= i; j++) {
                dp[i][j] = min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
        return dp[0][0];
    }
};